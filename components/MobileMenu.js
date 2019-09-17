import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionHide } from "../actions/mobileMenuActions";
import MainCatalog from "components/MainCatalog";
// import { withRouter } from "react-router-dom";
import { SubHead } from "components/Header";
import { withRouter } from "next/router";

const MobileMenu = props => {
  const isShown = useSelector(state => state.mobileMenu.isShown);
  const dispatch = useDispatch();
  const hide = () => {
    dispatch(actionHide());
  };
  useEffect(() => hide(), [props.router]);
  return (
    <>
      <div
        className={isShown ? "container" : "container hide"}
        onClick={() => dispatch(actionHide())}
      />
      <div className={isShown ? "container shown" : "container hide"}>
        {isShown && <Container />}
      </div>
      <style jsx>{`
        .container {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          background: #cccccc22;
          opacity: 0.5;
          z-index: 1000;
          transition: all 300ms linear;
        }

        .shown {
          background: #fff;
          opacity: 1;
          width: 80vw;
          left: 0px;
          overflow-x: scroll;
        }

        .hide {
          background: #fff;
          opacity: 0;
          width: 0vw;
          left: -100vw;
        }

        .wrapper {
          padding: 10px;
        }
      `}</style>
    </>
  );
};

// class MobileMenu extends React.Component {
//   componentDidUpdate(prevProps) {
//     console.log("updawte");
//     if (this.props.location.pathname !== prevProps.location.pathname) {
//       this.props.mobileMenuActions.actionHide();
//       console.log("no");
//     }
//   }
//   render() {
//     const { isShown } = this.props;
//     return <React.Fragment></React.Fragment>;
//   }
// }

const Container = props => {
  useEffect(() => {
    () => {
      document.body.className = "modal-open";
    };
  }, []);
  useEffect(() => {
    return () => {
      document.body.className = "";
    };
  }, []);
  return (
    <>
      <div className={"wrapper"}>
        <MainCatalog />
        <SubHead />
      </div>
      <style jsx>{`
        .wrapper {
          padding: 20px 0px;
        }
      `}</style>
    </>
  );
};

// const Header = connect(
//   state => {
//     return {
//       isShown: state.mobileMenu.isShown
//     };
//   },
//   dispatch => {
//     return {
//       mobileMenuActions: bindActionCreators(mobileMenuActions, dispatch)
//     };
//   }
// )(props => {
//   return (
//     <div onClick={() => props.mobileMenuActions.actionHide()}>Закрыть</div>
//   );
// });

// export default withRouter(
//   connect(
//     state => {
//       return {
//         isShown: state.mobileMenu.isShown
//       };
//     },
//     dispatch => {
//       return {
//         mobileMenuActions: bindActionCreators(mobileMenuActions, dispatch)
//       };
//     }
//   )(MobileMenu)
// );

export default withRouter(MobileMenu);

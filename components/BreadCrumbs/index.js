import React from "react";
import Link from "next/link";
import { connect } from "react-redux";

class BreadCrumbs extends React.Component {
  renderItems() {
    if (this.props.type === "custom") {
      return this.props.values.map((item, index) => {
        return (
          <>
            <Link href={item.href}>
              <a className={"item"}> {item.title} </a>
            </Link>
            <style jsx>{`
        .item {
          text-decoration: none;
          color: #666;
          padding: 5px;
          font-weight: 500;
        }

        .item::before {
          margin: 0px 5px;
          content " > ";
        
        }
        @media (max-width: 991.98px) {
      .container {
        padding: 5px 5px 0px 5px;
      }
      .item {
        font-size: 13px;
      }
    }

      `}</style>
          </>
        );
      });
    } else {
      let item = this.props.list[this.props.id];
      const { self } = this.props;
      if (item) {
        let ancestry = item.ancestry;
        if (ancestry === null) {
          return null;
        }
        let items = ancestry.split("/");
        if (self) {
          items.push(this.props.id);
        }
        return items.map((item, index) => {
          let group = this.props.list[item];
          return (
            <>
              <Link href={`/groups?id=${group.id}`} as={`/groups/${group.id}`}>
                <a className={"item"}> {group.title} </a>
              </Link>
              <style jsx>{`
              .item {
                text-decoration: none;
                color: #666;
                padding: 5px;
                font-weight: 500;
              }

              .item::before {
                margin: 0px 5px;
                content " > ";
              
              }
              @media (max-width: 991.98px) {
            .container {
              padding: 5px 5px 0px 5px;
            }
            .item {
              font-size: 13px;
            }
          }

            `}</style>
            </>
          );
        });
      }
      return null;
    }
  }
  render() {
    return (
      <>
        <div className={"container"}>
          <Link href={"/"}>
            <a className={"item"}>Главная</a>
          </Link>
          {this.renderItems()}
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;
            font-weight: 500;
          }

          .item {
            font-weight: 500;
            padding: 5px;
            text-decoration: none;
            color: #666;
          }
          @media (max-width: 991.98px) {
            .container {
              padding: 5px 5px 0px 5px;
            }
            .item {
              font-size: 13px;
            }
          }
        `}</style>
      </>
    );
  }
}

export default connect(state => {
  return {
    list: state.catalog.list
  };
})(BreadCrumbs);

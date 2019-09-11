import { connect } from "react-redux";
import { withRouter } from "next/router";
import MainCatalog from "components/MainCatalog";

class Post extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={"gcatalog"}>
          <MainCatalog />
        </div>
        <div className={"gcontent"}>
          <div>
            <div className={"header"}>
              <h1>{post.title}</h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    );
  }
}

Post.defaultProps = {
  post: {}
};

export default withRouter(
  connect((state, ownProps) => {
    return {
      post: state.posts.all[ownProps.router.query.id]
    };
  })(Post)
);

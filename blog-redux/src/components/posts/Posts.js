import React, { Component } from "react";
//import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { Badge, Jumbotron } from "reactstrap";
import { bindActionCreators } from "redux";
import * as blogPostActions from "../../redux/actions/blogPostActions";
import  "./style.css";

/**
 * @author
 * @class Posts
 **/
class Posts extends Component {
  state = {};
  componentDidMount() {
    this.props.actions.getBlogPosts();
  }

  render() {
    return (
      <div>
        <h3>
          Posts
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        <div>
          {this.props.blogPosts.map((post) => (
            <Jumbotron>
              <a border="0" href="https://github.com/typicode/json-server">
                {" "}
                <h1 className="display-7">
                  {post.title}/{post.id}--Hello, world!
                </h1>{" "}
              </a>
              <p className="lead">
                {post.text}--This is a simple hero unit, a simple
                Jumbotron-style component for calling extra attention to
                featured content or information.
              </p>
              {/* <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
            </Jumbotron>
          ))}

          {/* {this.props.posts.map((post) => (
            <Media key={post.id}>
              <Media body>
                <Media heading> {post.title}</Media>
                {post.text}
              </Media>

            </Media>
          ))} */}
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  // your expected props
};

Posts.defaultProps = {
  // your default props
};

const mapStateToProps = (state) => {
  // your redux state
  return {
    currentCategory: state.changeCategoryReducer,
    blogPosts: state.blogPostListReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  // your redux action
  return {
    actions: {
      getBlogPosts: bindActionCreators(blogPostActions.getBlogPosts, dispatch),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);

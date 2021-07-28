import React, { useEffect, useState } from "react";
//useEffect componentDidmount yerine kullanılır.
//useEffect ile lifescle tek elle toparladılar
import { connect } from "react-redux";
import { getcategories } from "../../redux/actions/categoryActions";
import {
  saveBlogPost,
  getBlogPosts,
} from "../../redux/actions/blogPostActions";
import BlogPostDetail from "./BlogPostDetail";

function AddOrUpdateBlogPost({
  changeCategoryReducer, //javada isimle obje aynıysa teki yeterli
  categoryListReducer,
  blogPostListReducer,
  saveBlogPostReducer,
  history,
  ...props
}) {
  const [blogPosts, setBlogPost] = useState({ ...props.blogPosts });
  useEffect(() => {
    if (categories.length === 0) {
      getcategories();
    }
    setBlogPost({ ...props.blogPosts });
  }, [props.blogPosts]);

  function handleChange(event) {
    const { name, value } = event.target;
    setBlogPost(
      (previousBlogPost = {
        ...previousBlogPost,
        [name]: name === "categoryId" ? parseInt(value, 10) : value,
      })
    );
  }
  function handleSave(event) {
    event.preventDefault();
    saveBlogPost(blogPosts).then(() => {
      history.push("/");
    });
  }
  return (
    <BlogPostDetail
      blogPost={blogPost}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

export function getBlogPostById(blogPosts, blogPostId) {
  let blogPost =
    blogPosts.find((blogPost) => blogPost.id === blogPostId) || null;
  return blogPost;
}
function mapStateToProps(state, ownProps) {
  const blogPostId = ownProps.match.params.blogPostId;
  const blogPost =
    blogPostId && state.blogPostListReducer.length > 0
      ? getBlogPostById(state.blogPostListReducer, blogPostId)
      : {};
  return {
    blogPosts,
    blogPosts: state.blogPostListReducer,
    categories: state.categoryListReducer,
  };
}
const mapDispatchToProps = {
  getcategories,
  saveBlogPost,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOrUpdateBlogPost);

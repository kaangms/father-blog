import * as actionTypes from "./actionTypes";

export function getBlogPostsSuccess(blogPosts) {
  return { type: actionTypes.GET_BLOGPOSTS_SUCCESS, payload: blogPosts };
}

///redux thunk
export function getBlogPosts(categoryId) {
  return function (dispatch) {
    //debugger;
    let url = "http://localhost:3000/blogPosts";
    if (categoryId) {
      url=url+"?categoryId="+categoryId
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getBlogPostsSuccess(result)));
  };
}

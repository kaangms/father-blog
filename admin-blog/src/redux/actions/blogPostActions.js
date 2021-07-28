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
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getBlogPostsSuccess(result)));
  };
}

export function createBlogPostSuccess(blogPosts) {
  return { type: actionTypes.CREATE_BLOGPOST_SUCCESS, payload: blogPosts };
}

export function updateBlogPostSuccess(blogPosts) {
  return { type: actionTypes.UPDATE_BLOGPOST_SUCCESS, payload: blogPosts };
}
//güncelleme put
//ekleme  post

export function saveBlogPostApi(blogPosts) {
  return fetch("http://localhost:3000/blogPosts/" + (blogPosts.id || ""), {
    method: blogPosts.id ? "PUT" : "POST",
    header: { "content-type": "aplication/json" },
    body: JSON.stringify(blogPosts),
  })
    .then(handleResponse)
    .catch(handleError);
}
export function saveBlogPostApi(blogPosts) {
  return function (dispatch) {
    return saveBlogPostApi(blogPosts).then((savedBlogPost) => {
      blogPosts.id
        ? dispatch(updateBlogPostSuccess(savedBlogPost))
        : createBlogPostSuccess(savedBlogPost);
    }).catch(error=>{
      throw error;
    })
  };
}

export async function handleResponse(response){
  if(response.ok){
    return response.json()
  }
  const error=await response.text()
  throw new Error(error)
}
export function handleError(error){
  console.error("Bir hata oluştu")
  throw error;
}

import React, { Component } from "react";
import TextInput from "../toolbox/TextInput";

export const BlogPostDetail = (category, blogPost, onSave, OnChange) => {
  return (
    <form onSubmit={onSave}>
      <h2>{blogPost.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="Name"
        label="Blog Post Name"
        value={blogPost.name}
        onChange={onChange}
      error="hata"
      />

      <button type="submit" className="btn btn-success">Save</button>
    </form>
  );
};



export default BlogPostDetail;

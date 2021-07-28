import React, { useEffect,useState } from "react";
//useEffect componentDidmount yerine kullanılır.
//useEffect ile lifescle tek elle toparladılar
import { connect } from "react-redux";


function AddOrUpdateBlogPost() ({
    changeCategoryReducer//javada isimle obje aynıysa teki yeterli
    ,categoryListReducer
    ,blogPostListReducer
    ,saveBlogPostReducer  
})
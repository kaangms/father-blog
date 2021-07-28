import {combineReducers} from "redux"
import changeCategoryReducer from './changeCategoryReducer';
import categoryListReducer from './categoryListReducer';
import blogPostListReducer from "./blogPostListReducer"
import saveBlogPostReducer from "./saveBlogPostReducer"


const rootReducer=combineReducers({
    changeCategoryReducer//javada isimle obje aynıysa teki yeterli
    ,categoryListReducer
    ,blogPostListReducer
    ,saveBlogPostReducer
})

export default rootReducer;
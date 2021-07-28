import {combineReducers} from "redux"
import changeCategoryReducer from './changeCategoryReducer';
import categoryListReducer from './categoryListReducer';
import blogPostListReducer from "./blogPostListReducer"



const rootReducer=combineReducers({
    changeCategoryReducer//javada isimle obje aynıysa teki yeterli
    ,categoryListReducer
    ,blogPostListReducer
})

export default rootReducer;
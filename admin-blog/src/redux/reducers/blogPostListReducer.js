import *  as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function postListReducer(state=initialState.blogPosts,action) {
    switch (action.type) {
        case actionTypes.GET_BLOGPOSTS_SUCCESS:
            
          return action.payload
    
        default:
           return state;
    }
}
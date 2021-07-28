import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveBlogReducer(
  state = initialState.saveBlogPost,
  action
) {
  switch (action.type) {
    case actionTypes.CREATE_BLOGPOST_SUCCESS:
      return action.payload;
    case actionTypes.UPDATE_BLOGPOST_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}

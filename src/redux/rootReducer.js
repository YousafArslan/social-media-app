import postReducer from "./posts/PostReducer";
import { combineReducers } from "redux";
import userReducer from "./users/UserReducer";
import tagReducer from "./tags/TagReducer";
import userinfoReducer from "./userinfo/UserInfoReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
  tags: tagReducer,
  userinfo: userinfoReducer,
});

export default rootReducer;

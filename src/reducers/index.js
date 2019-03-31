import {combineReducers} from "redux/es/redux";
import postsReducer from './postsReducer';
import usersReducer from "./usersReducer";

export default combineReducers({

    posts:postsReducer,
    users:usersReducer
})
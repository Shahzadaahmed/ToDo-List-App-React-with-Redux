// Main reducer file...!

import { combineReducers } from "redux";
import todoArray from "./case";

export default combineReducers({
    todoListArr: todoArray
});
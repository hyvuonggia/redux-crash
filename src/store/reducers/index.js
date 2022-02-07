import { combineReducers } from "redux";
import todoReducer from "./TodoReducer";


const rootReducer = combineReducers({
    myTodos: todoReducer
})

export default rootReducer
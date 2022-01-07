import {combineReducers} from "redux";
import {counterReducer} from "./counter/counterReducer";
import {tasksReducer} from "./tasks/tasksReducer";


export const rootReducer = combineReducers({
    counter: counterReducer,
    tasks: tasksReducer,
});
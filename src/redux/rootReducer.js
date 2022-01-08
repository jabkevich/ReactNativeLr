import {combineReducers} from "redux";
import {counterReducer} from "./counter/counterReducer";
import {tasksReducer} from "./tasks/tasksReducer";
import {todayReducer} from "./today/todayReducer";



export const rootReducer = combineReducers({
    counter: counterReducer,
    tasks: tasksReducer,
    today: todayReducer,
});
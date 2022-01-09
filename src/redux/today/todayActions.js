import {ADD_TODAY_TASK, CHANGE_PERCENT_TODAY, COMPLETE_TODAY_TASK, LOAD_TODAY_TASKS} from "./types";
import axios from "axios";


export const addTodayTask= (title) => (dispatch, getState) => {
    axios.post("http://localhost:3000/api/todayTasks", {title}).then(res=> {

        const {todayTasks, percentageOfCompletedTasksToday, completed} = getState().today
        const completedUpdate = res.data.complete ? completed + 1 : completed - 1;

        dispatch({
            type: CHANGE_PERCENT_TODAY,
            payload: {completedPercent: completedUpdate * 100 / todayTasks.length + 1, completed:completedUpdate}
        })
        dispatch({
            type: ADD_TODAY_TASK,
            payload:res.data
        });
    })
};


export const completeTodayTask= (task) => (dispatch, getState) => {

    const data = Object.assign({}, task);
    data.complete = !data.complete;

    axios.put("http://localhost:3000/api/todayTasks", data).then(res=> {
        const {todayTasks, percentageOfCompletedTasksToday, completed} = getState().today

        const completedUpdate = res.data.complete ? completed + 1 : completed - 1;

        dispatch({
            type: CHANGE_PERCENT_TODAY,
            payload: {completedPercent: completedUpdate * 100 / todayTasks.length, completed: completedUpdate}
        })
        dispatch({
            type: COMPLETE_TODAY_TASK,
            payload: res.data
        })
    })
};


export const loadTodayTasks = () => (dispatch) => {
    axios.get("http://localhost:3000/api/todayTasks").then(res=> {
        const  completed = res.data.filter(task => task.complete).length
        dispatch({
            type: LOAD_TODAY_TASKS,
            payload: {data: res.data, completed}
        });
    })
};
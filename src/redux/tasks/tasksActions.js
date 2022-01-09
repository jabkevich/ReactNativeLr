import {
    COMPLETE_TASK,
    ADD_TASK,
    REMOVE_TASK,
    LOAD_TASKS,
    SET_DESCRIPTION,
    ADD_POINT,
    COMPLETE_POINT,
    CHANGE_PERCENT
} from "./types";
import axios from "axios";
import {CHANGE_PERCENT_TODAY} from "../today/types";


export const removeTask= (id) => (dispatch, getState) => {
    axios.delete(`http://localhost:3000/api/tasks/${id}`).then(res=> {


        const {tasks, percentageOfCompletedTasks, completed} = getState().tasks
        const completedUpdate = res.data.complete ? completed - 1 : completed;

        dispatch({
            type: CHANGE_PERCENT,
            payload: {completedPercent: completedUpdate * 100 / (tasks.length - 1), completed : completedUpdate}
        })

        dispatch({
            type: REMOVE_TASK,
            payload: id
        });
    })
};

export const changeDescription= (task, description) => dispatch => {
    const data = Object.assign({}, task);

    data.description = description;
    axios.put("http://localhost:3000/api/tasks", data).then(res=>{
        dispatch({
            type: SET_DESCRIPTION,
            payload: {id: res.data.id, description: description}
        });
    })

};


export const addTask = (title) => (dispatch, getState) => {
    axios.post("http://localhost:3000/api/tasks/", {title}).then(res=> {


        const {tasks, percentageOfCompletedTasks, completed} = getState().tasks
        dispatch({
            type: CHANGE_PERCENT,
            payload: {completedPercent: completed * 100 / (tasks.length + 1), completed}
        })

        dispatch({
            type: ADD_TASK,
            payload: res.data
        });
    })
};

export const addPoint = (title, task) => (dispatch, getState) => {

    const data = Object.assign({},task);

    const id = Math.max.apply(Math,data.points.map(function(o){return o.id;})) + 1

    data.points.push({
        id,
        title
    })

    axios.put("http://localhost:3000/api/tasks", data).then(res=> {
        dispatch({
            type: ADD_POINT,
            payload: res.data

        });
    })
};


export const completeTask = (task) => (dispatch, getState) => {
    const data = Object.assign({}, task);
    data.complete = !data.complete;

    axios.put("http://localhost:3000/api/tasks", data).then(res=> {
        const {tasks, percentageOfCompletedTasks, completed} = getState().tasks
        const completedUpdate = res.data.complete ? completed + 1 : completed - 1;

        dispatch({
            type: CHANGE_PERCENT,
            payload: {completedPercent: completedUpdate * 100 / tasks.length, completed : completedUpdate}
        })
        dispatch({
            type: COMPLETE_TASK,
            payload: res.data
        });
    })
};
export const completePoint = (task, pointId) => (dispatch, getState) => {
    const data = Object.assign({}, task);

    for(let i = 0; i < data.points.length; i++){
        if(data.points[i].id === pointId){
            data.points[i].complete = !data.points[i].complete;
        }
    }

    axios.put("http://localhost:3000/api/tasks", data).then(res=> {

        dispatch({
            type: COMPLETE_POINT,
            payload: res.data

        });
    })
};


export const loadTasks= () => dispatch => {
    axios.get("http://localhost:3000/api/tasks/").then(res=>{

        const completed = res.data.filter(task => task.complete).length

        dispatch({
            type: LOAD_TASKS,
            payload: {data: res.data, completed}
        })
    })

}
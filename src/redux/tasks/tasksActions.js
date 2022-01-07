import {COMPLETE_TASK, ADD_TASK, REMOVE_TASK, LOAD_TASKS, SET_DESCRIPTION} from "./types";


export const removeTask= (id) => dispatch => {
    dispatch({
        type: REMOVE_TASK,
        payload: id
    });
};

export const changeDescription= (id, description) => dispatch => {
    dispatch({
        type: SET_DESCRIPTION,
        payload: {id: id, description: description}
    });
};


export const addTask= () => dispatch => {
    dispatch({
        type: ADD_TASK,
    });
};

export const completeTask = () => dispatch => {
    dispatch({
        type: COMPLETE_TASK,
    });
};


export const loadTasks= () => dispatch => {
    dispatch({
        type: LOAD_TASKS
    })
}
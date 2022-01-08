import {ADD_TODAY_TASK, COMPLETE_TODAY_TASK} from "./types";


export const addTodayTask= (title) => (dispatch, getState) => {

    const {todayTasks} = getState().today;

    dispatch({
        type: ADD_TODAY_TASK,
        payload: {
            id: todayTasks.length + 1,
            title,
            complete: false,
            description: "",
        }
    });
};


export const completeTodayTask= (id) => (dispatch, getState) => {

    const {todayTasks} = getState().today;

    dispatch({
        type: COMPLETE_TODAY_TASK,
        payload: id
    });
};


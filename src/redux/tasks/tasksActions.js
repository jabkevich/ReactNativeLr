import {COMPLETE_TASK, ADD_TASK, REMOVE_TASK, LOAD_TASKS, SET_DESCRIPTION, ADD_POINT, COMPLETE_POINT} from "./types";


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


export const addTask = (title) => (dispatch, getState) => {
    const {tasks} = getState()

    dispatch({
        type: ADD_TASK,
        payload: {
            id: tasks.length + 1,
            title: title,
            complete: false,
            description: "",
            points: []
        },
    });
};

export const addPoint = (title, taskId) => (dispatch, getState) => {
    const {tasks} = getState().tasks

    const id = tasks.filter(task=>task.id===taskId)[0].points.length + 1
    //


    dispatch({
        type: ADD_POINT,
        payload: {
            taskId: taskId,
            title: title
        }
    });
};


export const completeTask = (id) => dispatch => {
    dispatch({
        type: COMPLETE_TASK,
        payload: id

    });
};
export const completePoint = (taskId, pointId) => dispatch => {
    dispatch({
        type: COMPLETE_POINT,
        payload: {taskId, pointId}

    });
};


export const loadTasks= () => dispatch => {
    dispatch({
        type: LOAD_TASKS
    })
}
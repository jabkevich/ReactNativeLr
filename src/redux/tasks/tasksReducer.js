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

const initialState = {
    tasks: [],
    percentageOfCompletedTasks: 0,
    completed: 0
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {...state, tasks: [...state.tasks, action.payload]};
        }
        case ADD_POINT: {

            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id === action.payload.id){
                        return action.payload
                    }
                    return task
                })
            }
        }
        case SET_DESCRIPTION: {

            return {...state,
                tasks: state.tasks.map(task => {
                    if(task.id === action.payload.id){

                        return {
                            ...task,
                            description: action.payload.description
                        }
                    }
                    return task
                })
            };
        }
        case REMOVE_TASK: {
            return {...state, tasks: state.tasks.filter(task => action.payload !== task.id)};
        }
        case LOAD_TASKS: {
            return {...state,
                tasks: action.payload.data,
                percentageOfCompletedTasks: action.payload.completed * 100 / action.payload.data.length | 0,
                completed:  action.payload.completed
            };
        }
        case COMPLETE_TASK: {
            return {...state, tasks: state.tasks.map(task => {
                    if(action.payload.id === task.id){
                        return action.payload
                    }
                    return task;
                })};
        }
        case COMPLETE_POINT: {
            return {...state, tasks: state.tasks.map(task => {
                    if(action.payload.id === task.id){
                        return action.payload
                    }
                    return task;
                })};
        }
        case CHANGE_PERCENT: {
            return {
                ...state,
                percentageOfCompletedTasks: action.payload.completedPercent,
                completed: action.payload.completed,
            }
        }
        default:
            return state;
    }
}
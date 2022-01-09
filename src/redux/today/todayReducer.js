import {
    ADD_TODAY_TASK, CHANGE_PERCENT_TODAY,
    COMPLETE_TODAY_TASK, LOAD_TODAY_TASKS
} from "./types";

const initialState = {
    todayTasks: [],
    percentageOfCompletedTasksToday: 0,
    completed: 0
};

export const todayReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODAY_TASK: {
            return {
                ...state,
                todayTasks: [
                    ...state.todayTasks,
                    action.payload
                ]
            }
        }
        case COMPLETE_TODAY_TASK: {
            return {
                ...state,
                todayTasks: state.todayTasks.map(task=>{
                    if(task.id === action.payload.id){
                        return action.payload
                    }
                    return task
                })
            }
        }
        case LOAD_TODAY_TASKS: {
            return {
                ...state,
                todayTasks: action.payload.data,
                percentageOfCompletedTasksToday: action.payload.completed * 100 / action.payload.data.length | 0,
                completed:  action.payload.completed
            }
        }
        case CHANGE_PERCENT_TODAY: {
            return {
                ...state,
                percentageOfCompletedTasksToday: action.payload.completedPercent ,
                completed:  action.payload.completed
            }
        }
        default:
            return state;
    }
}
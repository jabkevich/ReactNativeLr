import {
    ADD_TODAY_TASK,
    COMPLETE_TODAY_TASK
} from "./types";

const initialState = {
    todayTasks: [
        {
            id: 1,
            title: "Купить Жабу",
            complete: false,
            description: "",
        },

    ],
    percentageOfCompletedTasksToday: 20
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
                    if(task.id === action.payload){
                        return {
                            ...task,
                            complete: !task.complete
                        }
                    }
                    return task
                })
            }
        }
        default:
            return state;
    }
}
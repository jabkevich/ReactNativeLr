import {COMPLETE_TASK, ADD_TASK, REMOVE_TASK, LOAD_TASKS, SET_DESCRIPTION, ADD_POINT, COMPLETE_POINT} from "./types";

const initialState = {
    tasks: [
        {
            id: 1,
            title: "Купить Жабу",
            complete: false,
            description: "Бла Бла Бла БЛА",
            points: [
                {
                    id: 1,
                    title: "Пойти в магазин",
                    complete: false
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу",
                    complete: false
                },
                {
                    id: 3,
                    title: "Пойти в магазин",
                    complete: false
                },
                {
                    id: 4,
                    title: "Пойти Купить жабу",
                    complete: false
                },
                {
                    id: 5,
                    title: "Пойти в магазин",
                    complete: false
                },
                {
                    id: 6,
                    title: "ЛЯЫВ",
                    complete: false
                },
                {
                    id: 7,
                    title: "Пойти Купить жабу",
                    complete: false
                },
                {
                    id: 8,
                    title: "Пойти в магазин",
                    complete: false
                },
                {
                    id: 8,
                    title: "ЛЯЫВ",
                    complete: false
                }
            ]
        },
        {
            id: 2,
            title: "Закрыть сессию",
            complete: false,
            description: "Бла Бла Бла БЛА",
            points: [
                {
                    id: 1,
                    title: "Пойти в магазин",
                    complete: false
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу",
                    complete: false
                }
            ]
        },
        {
            id: 3,
            title: "Заработать миллиард долларов",
            complete: false,
            description: "Бла Бла Бла БЛА",
            points: [
                {
                    id: 1,
                    title: "Взять",
                    complete: false
                },
                {
                    id: 2,
                    title: "И заработать миллион",
                    complete: false
                }
            ]
        },
        {
            id: 4,
            title: "Купить Жабу",
            complete: false,
            description: "Бла Бла Бла БЛА",
            points: [
                {
                    id: 1,
                    title: "Пойти в магазин",
                    complete: false
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу",
                    complete: false
                }
            ]
        },
        {
            id: 5,
            title: "Купить Жабу",
            complete: false,
            description: "Бла Бла Бла БЛА",
            points: [
                {
                    id: 1,
                    title: "Пойти в магазин",
                    complete: false
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу",
                    complete: false
                }
            ]
        },
        {
            id: 6,
            title: "Купить Жабу",
            complete: false,
            description: "Бла Бла Бла БЛА",
            points: [
                {
                    id: 1,
                    title: "Пойти в магазин",
                    complete: false
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу",
                    complete: false
                }
            ]
        },
        {
            id: 7,
            title: "Купить Жабу",
            complete: false,
            description: "Бла Бла Бла БЛА",
            points: [
                {
                    id: 1,
                    title: "Пойти в магазин",
                    complete: false
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу",
                    complete: false
                }
            ]
        },
        {
            id: 8,
            title: "Купить Жабу",
            complete: false,
            description: "Бла Бла Бла БЛА",
            points: [
                {
                    id: 1,
                    title: "Пойти в магазин",
                    complete: false
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу",
                    complete: false
                }
            ]
        },
        {
            id: 9,
            title: "Купить Жабу",
            complete: false,
            description: "Бла Бла Бла БЛА",
            points: [
                {
                    id: 1,
                    title: "Пойти в магазин",
                    complete: false
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу",
                    complete: false
                }
            ]
        },
        {
            id: 10,
            title: "Купить Жабу",
            complete: false,
            description: "Бла Бла Бла БЛА",
            points: [
                {
                    id: 1,
                    title: "Пойти в магазин",
                    complete: false
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу",
                    complete: false
                }
            ]
        },
    ],
    percentageOfCompletedTasks: 38
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
                    if(task.id === action.payload.taskId){
                        return {
                            ...task,
                            points: [
                                ...task.points,
                                {
                                    id: task.points.length + 1,
                                    title: action.payload.title
                                }
                            ]
                        }
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
            return {...state, tasks: action.payload};
        }
        case COMPLETE_TASK: {
            return {...state, tasks: state.tasks.map(task => {
                    if(action.payload === task.id){
                        return {
                            ...task,
                            complete: !task.complete
                        }
                    }
                    return task;
                })};
        }
        case COMPLETE_POINT: {
            return {...state, tasks: state.tasks.map(task => {
                    if(action.payload.taskId === task.id){
                        return {
                            ...task,
                            points: task.points.map(point=>{
                                if(point.id === action.payload.pointId){
                                    return {
                                        ...point,
                                        complete: !point.complete
                                    }
                                }
                                return point;
                            })
                        }
                    }
                    return task;
                })};
        }
        default:
            return state;
    }
}
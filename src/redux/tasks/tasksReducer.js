import {COMPLETE_TASK, ADD_TASK, REMOVE_TASK, LOAD_TASKS, SET_DESCRIPTION} from "./types";

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
                    title: "Пойти в магазин"
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу"
                },
                {
                    id: 3,
                    title: "Пойти в магазин"
                },
                {
                    id: 4,
                    title: "Пойти Купить жабу"
                },
                {
                    id: 5,
                    title: "Пойти в магазин"
                },
                {
                    id: 6,
                    title: "ЛЯЫВ"
                },
                {
                    id: 7,
                    title: "Пойти Купить жабу"
                },
                {
                    id: 8,
                    title: "Пойти в магазин"
                },
                {
                    id: 8,
                    title: "ЛЯЫВ"
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
                    title: "Пойти в магазин"
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу"
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
                    title: "Взять"
                },
                {
                    id: 2,
                    title: "И заработать миллион"
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
                    title: "Пойти в магазин"
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу"
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
                    title: "Пойти в магазин"
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу"
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
                    title: "Пойти в магазин"
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу"
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
                    title: "Пойти в магазин"
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу"
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
                    title: "Пойти в магазин"
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу"
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
                    title: "Пойти в магазин"
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу"
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
                    title: "Пойти в магазин"
                },
                {
                    id: 2,
                    title: "Пойти Купить жабу"
                }
            ]
        },
    ]
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {...state, tasks: [...state.tasks, action.payload]};
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
        default:
            return state;
    }
}
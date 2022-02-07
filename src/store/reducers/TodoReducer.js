import { ADD_TODO, DELETE_TODO, MARK_COMPLETE } from "./types";

const initialState = {
    todos: [
        {
            id: 1,
            title: 'Viec 1',
            completed: false,
        },
        {
            id: 2,
            title: 'Viec 2',
            completed: false,
        },
        {
            id: 3,
            title: 'Viec 3',
            completed: false,
        },
    ]
}

const todoReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case MARK_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === payload) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [payload, ...state.todos]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }

        default:
            return state
    }

}

export default todoReducer
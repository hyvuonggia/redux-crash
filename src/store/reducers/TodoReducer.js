import { ADD_TODO, DELETE_TODO, GET_TODOS, MARK_COMPLETE } from "./types";

const initialState = {
    todos: []
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
        case GET_TODOS:
            return {
                ...state,
                todos: payload
            }

        default:
            return state
    }

}

export default todoReducer
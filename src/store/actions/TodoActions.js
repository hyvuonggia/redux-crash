import { ADD_TODO, DELETE_TODO, MARK_COMPLETE } from "../reducers/types"

export const markComplete = (id) => {
    const markCompleteAction = dispatch => {
        dispatch({
            type: MARK_COMPLETE,
            payload: id
        })
    }
    return markCompleteAction
}

export const addTodo = (todo) => (dispatch) => {
    dispatch({
        type: ADD_TODO,
        payload: todo,
    })
}

export const deleteTodo = (id) => (dispatch) => {
    dispatch({
        type: DELETE_TODO,
        payload: id
    })
}
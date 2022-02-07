import { ADD_TODO, MARK_COMPLETE } from "../reducers/types"

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
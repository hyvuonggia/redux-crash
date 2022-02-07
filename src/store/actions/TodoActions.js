import axios from "axios"
import { ADD_TODO, DELETE_TODO, GET_TODOS, MARK_COMPLETE } from "../reducers/types"

export const markComplete = (id) => {
    const markCompleteAction = dispatch => {
        dispatch({
            type: MARK_COMPLETE,
            payload: id
        })
    }
    return markCompleteAction
}

export const addTodo = (newTodo) => async (dispatch) => {
    try {
        await axios.post('https://jsonplaceholder.typicode.com/todos?_limit=5', newTodo)
        dispatch({
            type: ADD_TODO,
            payload: newTodo,
        })
    } catch (error) {
        console.error(error);
    }

}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        dispatch({
            type: DELETE_TODO,
            payload: id
        })
    } catch (error) {
        console.error(error);
    }

}

export const getTodos = () => async (dispatch) => {

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        dispatch({
            type: GET_TODOS,
            payload: response.data
        })
    } catch (error) {

    }
}
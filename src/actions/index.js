import * as types from '../constants/ActionTypes';

let nextTodoId = 0

export const addTodo = (text) => {
    return {
        type: types.ADD_TODO,
        payload: {
            id: nextTodoId++,
            text,
            completed: false
        }
    }
}

export const toggleTodo = (id) => {
    return {
        type: types.TOGGLE_TODO,
        payload: {
            id
        }
    }
}

export const toggleAll = () => {
    return {
        type: types.TOGGLE_ALL,
    }
}

export const destroyTodo = (id) => {
    return {
        type: types.DESTROY_TODO,
        payload: {
            id
        }
    }
}

export const clearCompleted = () => {
    return {
        type: types.CLEAR_COMPLETED
    }
}

export const editTodo = (id, text) => {
    return {
        type: types.EDIT_TODO,
        payload: {
            id,
            text
        }
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: types.SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}
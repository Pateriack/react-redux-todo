import * as types from '../constants/ActionTypes'

export const allCompleted = (todos) => todos.reduce((result, todo) => result && todo.completed, true)

export const numberCompleted = (todos) => todos.reduce((count, todo) => todo.completed ? count + 1 : count , 0)
export const numberActive = (todos) => todos.reduce((count, todo) => !todo.completed ? count + 1 : count , 0)

const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case types.TOGGLE_TODO:
            if(state.id !== action.payload.id)
                return state
            return Object.assign({}, state, {completed: !state.completed})

        case types.EDIT_TODO:
            if(state.id !== action.payload.id)
                return state
            return Object.assign({}, state, {text: action.payload.text})

        default:
            return state
    }
}

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return [
                ...state,
                Object.assign({}, action.payload)
            ]

        case types.TOGGLE_TODO:
            return state.map(todo => todoReducer(todo, action))

        case types.TOGGLE_ALL:
            const completed = !allCompleted(state)
            return state.map(todo => Object.assign({}, todo, {completed}))

        case types.DESTROY_TODO:
            return state.filter(todo => todo.id !== action.payload.id)

        case types.CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed)

        case types.EDIT_TODO:
            return state.map(todo => todoReducer(todo, action))

        default:
            return state
    }
}

export default todosReducer
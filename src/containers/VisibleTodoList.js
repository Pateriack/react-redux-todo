import { connect } from 'react-redux'
import { toggleTodo, destroyTodo, editTodo } from '../actions'
import TodoList from '../components/TodoList'
import * as filterTypes from '../constants/FilterTypes'

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case filterTypes.FILTER_ACTIVE:
            return todos.filter(todo => !todo.completed)

        case filterTypes.FILTER_COMPLETED:
            return todos.filter(todo => todo.completed)

        default:
            return todos
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickToggleTodo: (id) => dispatch(toggleTodo(id)),
        onClickDestroyTodo: (id) => dispatch(destroyTodo(id)),
        onEditTodo: (id, text) => dispatch(editTodo(id, text))
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList
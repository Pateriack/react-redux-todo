import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onClickToggleTodo, onClickDestroyTodo, onEditTodo }) => (
    <ul className="todo-list">
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClickToggle={() => onClickToggleTodo(todo.id)}
                onClickDestroy={() => onClickDestroyTodo(todo.id)}
                onEditTodo={(text) => onEditTodo(todo.id, text)}
            />
        )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onClickToggleTodo: PropTypes.func.isRequired,
    onClickDestroyTodo: PropTypes.func.isRequired,
    onEditTodo: PropTypes.func.isRequired
}

export default TodoList
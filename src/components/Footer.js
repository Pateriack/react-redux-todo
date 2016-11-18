import React, { PropTypes } from 'react'
import * as filterTypes from '../constants/FilterTypes'
import FilterLink from '../containers/FilterLink'

const Footer = ({ numTodos, numCompleted, numActive, onClickClearCompleted }) => {
    if(numTodos.length === 0)
        return null

    return (
        <footer className="footer">
            <span className="todo-count">
                {numActive} {numActive === 1 ? 'item left' : 'items left'}
            </span>
            <ul className="filters">
                <li>
                    <FilterLink filter={filterTypes.FILTER_ALL}>All</FilterLink>
                    <FilterLink filter={filterTypes.FILTER_ACTIVE}>Active</FilterLink>
                    <FilterLink filter={filterTypes.FILTER_COMPLETED}>Completed</FilterLink>
                </li>
            </ul>
            {numCompleted > 0 &&
                <button
                    type="button"
                    className="clear-completed"
                    onClick={onClickClearCompleted}
                >
                    Clear Completed
                </button>
            }
        </footer>
    )
}

Footer.propTypes = {
    numTodos: PropTypes.number.isRequired,
    numActive: PropTypes.number.isRequired,
    numCompleted: PropTypes.number.isRequired,
    onClickClearCompleted: PropTypes.func.isRequired
}

export default Footer
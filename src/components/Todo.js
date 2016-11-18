import React, { Component, PropTypes } from 'react'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {editing: false, value: props.text}
        this.finishEditing = this.finishEditing.bind(this)
    }

    finishEditing() {
        if(this.state.editing) {
            this.setState({editing: false})
            this.props.onEditTodo(this.state.value)
        }
    }

    componentDidUpdate() {
        if(this.state.editing)
            this.input.focus()
    }

    render() {
        let { text, completed, onClickToggle, onClickDestroy } = this.props
        let { editing, value } = this.state

        let className = ''

        if(completed)
            className += ' completed '
        if(editing)
            className += ' editing '

        return (
            <li className={className}>
                <div className="view">
                    <input
                        type="checkbox"
                        className="toggle"
                        checked={completed}
                        onChange={onClickToggle}
                    />
                    <label onDoubleClick={() => this.setState({editing: true})}>
                        {text}
                    </label>
                    <button
                        type="button"
                        className="destroy"
                        onClick={onClickDestroy}
                    />
                </div>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        this.finishEditing()
                    }}
                >
                    <input
                        className="edit"
                        value={value}
                        onChange={e => this.setState({value: e.target.value})}
                        ref={input => this.input = input}
                        onBlur={() => this.finishEditing()}
                    />
                </form>
            </li>
        )
    }
}


Todo.propTypes = {
    onClickToggle: PropTypes.func.isRequired,
    onClickDestroy: PropTypes.func.isRequired,
    onEditTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
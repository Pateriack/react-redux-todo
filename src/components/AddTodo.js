import React, { Component, PropTypes } from 'react'

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    this.props.onSubmitTodo(this.state.value)
                    this.setState({value: ''})
                }}
            >
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        )
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }
}

AddTodo.propTypes = {
    onSubmitTodo: PropTypes.func.isRequired
}

export default AddTodo
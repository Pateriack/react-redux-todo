import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import { addTodo } from '../actions'

const mapStateToProps = (state) => { return {} }

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitTodo: (text) => dispatch(addTodo(text))
    }
}

const AddTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)

export default AddTodoContainer
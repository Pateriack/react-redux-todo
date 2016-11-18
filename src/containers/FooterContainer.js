import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { clearCompleted } from '../actions'
import { numberCompleted, numberActive } from '../reducers/todos'

const mapStateToProps = (state) => {
    return {
        numCompleted: numberCompleted(state.todos),
        numActive: numberActive(state.todos),
        numTodos: state.todos.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickClearCompleted: () => dispatch(clearCompleted())
    }
}

const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)

export default FooterContainer
import { connect } from 'react-redux'
import ToggleAll from '../components/ToggleAll'
import { toggleAll } from '../actions'
import { allCompleted } from '../reducers/todos'

const mapStateToProps = (state) => {
    return {
        shouldDisplay: state.todos.length > 0,
        allCompleted: allCompleted(state.todos)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickToggle: () => dispatch(toggleAll())
    }
}

const ToggleAllContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToggleAll)

export default ToggleAllContainer
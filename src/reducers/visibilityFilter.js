import * as actionTypes from '../constants/ActionTypes'
import * as filterTypes from '../constants/FilterTypes'

const visibilityFilterReducer = (state = filterTypes.FILTER_ALL, action) => {
    switch(action.type) {
        case actionTypes.SET_VISIBILITY_FILTER:
            return action.payload.filter

        default:
            return state
    }
}

export default visibilityFilterReducer
import React, { PropTypes } from 'react';

const ToggleAll = ({ shouldDisplay, allCompleted, onClickToggle }) => {
    if (!shouldDisplay)
        return null

    return (
        <input
            type="checkbox"
            className="toggle-all"
            checked={allCompleted}
            onChange={onClickToggle}
        />
    )
}

ToggleAll.propTypes = {
    shouldDisplay: PropTypes.bool.isRequired,
    allCompleted: PropTypes.bool.isRequired,
    onClickToggle: PropTypes.func.isRequired
}

export default ToggleAll
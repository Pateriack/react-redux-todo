import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
    return (
        <a href="#"
           onClick={e => {
               e.preventDefault()
               onClick()
           }}
           className={active ? 'selected' : ''}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link
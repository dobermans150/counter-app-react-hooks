import React from 'react'
import PropTypes from 'prop-types'

export const TodoItem = ( { todo, index, handleToggle, handleDelete } ) => {
    return (
        <li className="list-group-item" key={ todo.id }>
            <p
                className={ `${todo.done && 'complete'}` }
                onClick={ () => handleToggle( todo.id ) }

            >
                { index + 1 }. { todo.desc }
            </p>
            <button
                className="btn btn-danger"
                onClick={ () => handleDelete( todo.id ) }
            >
                Borrar
            </button>
        </li>
    )
}





TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}


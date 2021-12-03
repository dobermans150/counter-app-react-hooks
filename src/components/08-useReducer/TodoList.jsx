import React from 'react'
import PropTypes from 'prop-types'

import { TodoItem } from './TodoItem'

export const TodoList = ( { todos, handleToggle, handleDelete } ) => {


    return (
        <ol className="list-group list-group-flush">
            { todos.map( ( todo, i ) => (
                <TodoItem key={ todo.id } todo={ todo } index={ i } handleDelete={ handleDelete } handleToggle={ handleToggle } />
            ) ) }
        </ol>
    )
}





TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}



import React, { useEffect, useReducer } from 'react';

import './Styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
};

export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );


    useEffect( () => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [ todos ] );

    const handleDelete = ( todoId ) => {
        const deleteItem = {
            type: 'delete',
            payload: todoId,
        };

        dispatch( deleteItem );
    };

    const handleToggle = ( todoId ) => {
        dispatch( { type: 'toggle', payload: todoId } );
    };

    const handleAddTodo = ( newTodo ) => {

        dispatch( {
            type: 'add',
            payload: newTodo,
        } );
    }


    return (
        <div>
            <h1>ToDo App ( { todos.length } ) </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } handleToggle={ handleToggle } handleDelete={ handleDelete } />
                </div>
                <div className="col">
                    <TodoAdd handleAddTodo={ handleAddTodo } />
                </div>
            </div>
        </div>
    );
};

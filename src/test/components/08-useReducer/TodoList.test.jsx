import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixture/demotodos';

describe( 'Pruebas en el componente TodoList <TodoList  />', () => {
    const todos = demoTodos;
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();


    let wrapper = shallow(
        <TodoList
            todos={ todos }
            handleToggle={ handleToggle }
            handleDelete={ handleDelete }
        />
    )
    beforeEach( () => {
        wrapper = shallow(
            <TodoList
                todos={ todos }
                handleToggle={ handleToggle }
                handleDelete={ handleDelete }
            />
        )
    } )

    test( 'Debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot()

    } )


    test( 'debe tener n cantidades de <TodoItem  />', () => {

        expect( wrapper.find( 'TodoItem' ).length ).toBe( demoTodos.length )
        expect( wrapper.find( 'TodoItem' ).at( 0 ).prop( 'handleDelete' ) ).toEqual( expect.any( Function ) )
    } )


} )

import React from 'react';
import { shallow } from "enzyme";

import { TodoItem } from "../../../components/08-useReducer/TodoItem"
import { demoTodos } from '../../fixture/demotodos'

describe( 'Pruebas en <TodoItem  />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const index = 1;
    const todo = demoTodos[ 0 ];


    let wrapper = shallow(
        <TodoItem
            index={ index }
            todo={ todo }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }

        />
    );

    beforeEach( () => {
        wrapper = shallow(
            <TodoItem
                index={ index }
                todo={ todo }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }

            />
        );
    } )


    test( 'debe de mostrarse de manera correcta', () => {

        expect( wrapper ).toMatchSnapshot()

    } )

    test( 'Debe de llamar la funcion "borrar"', () => {

        wrapper.find( 'button' ).simulate( 'click' );
        expect( handleDelete ).toHaveBeenCalledWith( todo.id );

    } )

    test( 'Debe de llamar la funcion "toggle"', () => {
        wrapper.find( 'p' ).simulate( 'click' );
        expect( handleToggle ).toHaveBeenCalledWith( todo.id );
    } )

    test( 'Debe de mostrar el texto correctamente', () => {

        const text = wrapper.find( 'p' ).text();
        expect( text.trim() ).toBe( `${index + 1}. ${todo.desc}` )

    } )


    test( 'Debe de tener la clase complete', () => {

        const newTodo = { ...todo, done: true }

        const newWrapper = shallow( <TodoItem
            index={ index }
            todo={ newTodo }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }

        /> )

        expect( newWrapper.find( 'p' ).hasClass( 'complete' ) ).toBe( true );

    } )

} )

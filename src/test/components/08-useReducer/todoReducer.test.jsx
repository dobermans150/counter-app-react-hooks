import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixture/demotodos";


describe( 'Pruebas en todoReducer', () => {
    test( 'Debe de retornar el estado por defecto ', () => {

        const state = todoReducer( demoTodos, {} );
        expect( state ).toEqual( demoTodos );
    } )


    test( 'Debe de agregar un TODO', () => {


        const newTodo = {
            id: 3,
            desc: 'Apreder cloudformation',
            done: false,
        }


        const action = {
            type: 'add',
            payload: newTodo,
        }

        const state = todoReducer( demoTodos, action )

        expect( state ).toEqual( [ ...demoTodos, newTodo ] );


    } )


    test( 'Debe de borrar un todo', () => {


        const action = {
            type: 'delete',
            payload: 1,
        }

        const state = todoReducer( demoTodos, action )

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [ demoTodos[ 1 ] ] );


    } )

    test( 'Debe de marcar una tarea en done', () => {

        const action = {
            type: 'toggle',
            payload: 2,
        }

        const state = todoReducer( demoTodos, action );

        expect( state[ 1 ]?.done ).toBe( !demoTodos[ 1 ].done );

    } )




} )

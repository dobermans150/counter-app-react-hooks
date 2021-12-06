import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe( 'Pruenas en useCounter.jsx', () => {


    test( 'debe de retornar valores por defecto', () => {
        const { result } = renderHook( () => useCounter( 100 ) );

        const { counter } = result.current;

        expect( counter ).toBe( 100 );



    } )

    test( 'debe de incrementar el counter en 1', () => {


        const { result } = renderHook( () => useCounter( 100 ) );
        const { increment } = result.current;

        act( () => {
            increment()
        } )

        const { counter } = result.current;
        expect( counter ).toBe( 101 )

    } )


    test( 'Debe de decrementar el counter en 1', () => {
        const { result } = renderHook( () => useCounter( 100 ) );
        const { decrement } = result.current;

        act( () => {
            decrement()
        } )

        const { counter } = result.current;
        expect( counter ).toBe( 99 )
    } )

    test( 'Debe de resetear al estado inicial', () => {
        const { result } = renderHook( () => useCounter( 100 ) );
        const { increment, reset } = result.current;

        act( () => {
            increment();
            reset()
        } )

        const { counter } = result.current;

        expect( counter ).toBe( 100 )


    } )



} )

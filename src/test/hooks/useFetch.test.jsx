import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../../hooks/useFetch';

describe( 'Pruebas en useFetch', () => {
    test( 'Debe de retornar el valor por defecto', () => {

        const { result } = renderHook( () => useFetch( 'https://www.breakingbadapi.com/api/quotes/1' ) );

        const { data, loading, error } = result.current;
        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );

    } )

    test( 'Debe de tener la info deseada, loading false, error false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetch( 'https://www.breakingbadapi.com/api/quotes/1' ) );
        await waitForNextUpdate( { timeout: 4000 } );

        const { data, loading, error } = result.current;

        expect( data.length ).toBe( 1 );
        expect( loading ).toBe( false );
        expect( error ).toBe( null );

    } )

    test( 'Debe de manejar el error', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetch( 'https://reqres.in/apid/users?page=2' ) );
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( false );
        expect( error ).toBe( 'no se puedo cargar la info' );

    } )


} )


import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm';



describe( 'Pruebas en useform', () => {
    const initialForm = {
        name: 'Fernando',
        email: 'Fernando@gmail.com',

    }

    test( 'Debe de regresear un formulario por defecto', () => {
        const { result } = renderHook( () => useForm( initialForm ) )
        const [ value ] = result.current

        expect( value ).toEqual( initialForm )

    } )


    test( 'Debe de cambiar el valor del formulario (cambiar name)', () => {

        const { result } = renderHook( () => useForm( initialForm ) )

        const [ , handleInputChange ] = result.current

        act( () => {
            handleInputChange( { target: { name: 'name', value: 'Christian' } } )
        } );

        const [ value ] = result.current;

        expect( value ).toEqual( { ...initialForm, name: 'Christian' } );


    } )

    test( 'Debe de re-establecer el formulario con REST', () => {

        const { result } = renderHook( () => useForm( initialForm ) )

        const [ , handleInputChange, reset ] = result.current

        act( () => {
            handleInputChange( { target: { name: 'name', value: 'Christian' } } );

            reset();
        } );

        const [ value ] = result.current

        expect( value ).toEqual( initialForm )
    } )



} )

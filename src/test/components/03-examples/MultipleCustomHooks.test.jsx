import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock( '../../../hooks/useFetch' )
jest.mock( '../../../hooks/useCounter' )



describe( 'Pruebas <MultipleCustomHooks  />', () => {

    beforeEach( () => {
        useCounter.mockReturnValue( {
            counter: 10,
            increment: () => { }
        } )
    } )

    test( 'Debe de mostrarse correctamente ', () => {

        useFetch.mockReturnValue( {
            data: null,
            loading: true,
            error: null
        } )


        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot()
    } )

    test( 'Debe de mostrar la infromacion', () => {

        useFetch.mockReturnValue( {
            data: [ {
                author: 'Christian',
                quote: 'Hola mundo'
            } ],
            loading: false,
            error: null
        } )


        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find( '.alert' ).exists() ).toBe( false );
        expect( wrapper.find( '.mb-0' ).text().trim() ).toBe( 'Hola mundo' );
        expect( wrapper.find( 'footer' ).text().trim() ).toBe( 'Christian' );




    } )

} )

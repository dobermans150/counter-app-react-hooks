import React from 'react';
import { mount } from 'enzyme'
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/userContext';

describe( 'Pruebas en <LoginScreen  />', () => {
    const setUser = jest.fn()

    const wrapper = mount(
        <UserContext.Provider
            value={ {
                setUser,
            } }
        >
            <LoginScreen />
        </UserContext.Provider>
    )


    test( 'Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    } )

    test( 'Debe de ejecutar el setUser con el argumento', () => {

        wrapper.find( 'button' ).prop( 'onClick' )()

        expect( setUser ).toHaveBeenCalledWith( {
            id: 'use2134',
            name: 'Christian',
            email: 'christianjguevara@mail.com'
        } )


    } )



} )

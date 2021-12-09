import React from 'react';
import { mount } from 'enzyme'
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/userContext';

describe( 'pruebas en HomeScreen', () => {

    const user = {
        name: 'Fernando',
        email: 'correo@corre.com'
    }

    const wrapper = mount(
        <UserContext.Provider
            value={ user }
        >
            <HomeScreen />
        </UserContext.Provider>
    )

    test( 'Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    } )


} )

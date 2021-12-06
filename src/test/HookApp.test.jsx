import React from 'react';
import { shallow } from 'enzyme'
import HookApp from '../HookApp';


describe( 'Pruebas en el archivo HookApp ', () => {

    const wrapper = shallow( <HookApp /> )


    test( 'Debe de retornet un componente', () => {
        expect( wrapper ).toMatchSnapshot()
    } )

} )

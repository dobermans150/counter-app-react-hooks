import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './userContext'

export const MainApp = () => {
    /*    const user = {
           id: 'use2134',
           name: 'Christian',
           email: 'christianjguevara@mail.com'
       } */

    const [ user, setUser ] = useState( {} )

    return (

        <UserContext.Provider value={ { user, setUser } } >
            <AppRouter />
        </UserContext.Provider>

    )
}

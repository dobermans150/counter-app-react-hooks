import React, { useContext } from 'react'
import { UserContext } from './userContext';

export const LoginScreen = () => {

    const { setUser } = useContext( UserContext );

    const userData = {
        id: 'use2134',
        name: 'Christian',
        email: 'christianjguevara@mail.com'
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ () => setUser( userData ) }
            >
                Login
            </button>
        </div>
    )
}

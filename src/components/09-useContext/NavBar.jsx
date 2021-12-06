import React from 'react'
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">UseContext</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink activeClassName="active" className="nav-link " aria-current="page" to="/home">Home</NavLink>
                        <NavLink activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                        <NavLink activeClassName="active" className="nav-link " to="/about">About</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from "../utils/auth";

const Navbar = () => {

    const isLoggedIn = Auth.loggedIn();

    const handleLogout = () => {
        Auth.logout();
    };


    return (
        <nav className="navbar">
            <div className="container-fluid nav-lgo-btn">
                <Link style={{ textDecoration: 'none' }} to="/"> <a className="navbar-brand jjk-nav">
                    <img src="./images/gojoNavIcon.png" alt="" width="30" height="24" className="d-inline-block align-text-top">
                    </img>
                    Jujutsu Kaisen Blog
                </a>
                </Link>

                {isLoggedIn
                    ? (
                        <div className="dropdown-center">
                            <button type="button" className="btn menu-button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu
                            </button>
                            <ul className="dropdown-menu">
                                <Link to="/newpost"><li className="dropdown-item">New Post</li></Link>
                                <Link to="/" onClick={handleLogout}><li className="dropdown-item">Logout</li></Link>
                            </ul>
                        </div>
                    )
                    : (
                        <>
                            <Link to="/login"><button type="button" className="login-button btn btn-primary btn-sm">Login</button></Link>
                        </>
                    )}
            </div>
        </nav>
    );
};

export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const { isLoggedIn } = this.state;

    return (
        <nav className="navbar">
            <div className="container-fluid nav-lgo-btn">
                <Link style={{ textDecoration: 'none' }} to="/"> <a className="navbar-brand jjk-nav">
                    <img src="./images/gojoNavIcon.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
                    </img>
                    Jujutsu Kaisen Blog
                </a>
                </Link>

                {
                    isLoggedIn
                    ? (
                        <Link to="/login"><button type="button" className="login-button btn btn-primary btn-sm">Login</button></Link>
                    )
                    : (
                        <Link to="/login"><button type="button" className="login-button btn btn-primary btn-sm">Logout</button></Link>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {


    return (
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand jjk-nav" href="#">
                    <img src="./images/gojoNavIcon.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
                    </img>
                    Jujutsu Kaisen Blog
                </a>

                <button type="button" className="login-button btn btn-primary btn-sm">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
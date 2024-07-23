import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {


    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="./images/gojoNavIcon.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
                    </img>
                    Jujutsu Kaisen Blog
                </a>

                <button type="button" class="btn btn-primary btn-sm">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
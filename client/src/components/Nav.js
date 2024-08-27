import React from 'react';
import { Link } from 'react-router-dom';
import Auth from "../utils/auth";

import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const isLoggedIn = Auth.loggedIn();

    // navigate
    const navigate = useNavigate();

    //re-routes to the landing page of the blog and user logged out using auth utils
    const handleLogout = () => {
        navigate("/");
        Auth.logout();
        window.location.reload(false);
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
                {/* If the user is logged in, they will be presented with a menu button in place of the login button */}
                {isLoggedIn
                    ? (
                        <div className="dropdown-center">
                            <button type="button" className="btn menu-button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu
                            </button>
                            <ul className="dropdown-menu">
                                <Link style={{ textDecoration: 'none' }} to="/profile"><li className="dropdown-item">My Profile</li></Link>
                                <Link style={{ textDecoration: 'none' }} to="/blog"><li className="dropdown-item">Blog</li></Link>
                                <Link style={{ textDecoration: 'none' }} to="/newpost"><li className="dropdown-item">New Post</li></Link>
                                <li className="dropdown-item" onClick={handleLogout}>Logout</li>
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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {

    return (
        <div>
            {/* This will be the initial landing page with a sign up button */}

            <p className="fs-1 fw-bold text-center homepg-welcome">Welcome Sorceror</p>

            <img src="./images/gojoLandingImage.png" className="img-fluid mx-auto d-block" alt="Gojo"></img>
            <div className="d-grid gap-2 col-6 mx-auto">
            <Link to="/signup"><button type="button" className="wrap button btn btn-outline-primary btn-lg mx-auto">Sign Up</button></Link>
            </div>
            
        </div>
    );
};

export default HomePage;
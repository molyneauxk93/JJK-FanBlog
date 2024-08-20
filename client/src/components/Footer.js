import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="footer">
        {/* Beginning of Footer section */ }
        
        <h2 className="footer-logo">Watch Jujutsu Kaisen</h2>
        <Link to="https://www.crunchyroll.com/"><img src="./images/Crunchyroll_logo_2012v.png" className="mx-auto d-block" alt="Gojo" style={{ height: "50px", width: "200px", paddingBottom: "10px" }}></img></Link>

        <div className="footer">

        

        </div>
        </div>
    );
}

export default Footer;
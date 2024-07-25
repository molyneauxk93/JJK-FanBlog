import React, { useState } from 'react';
import { useRef } from 'react';



const Login = () => {
    

    return (
        <div className="login-container">
            <p className="fs-1 fw-bold text-center login-logo">Login</p>
            <form>
                <div className="login-input">
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        id="email"
                    //onChange={handleChange}
                    />
                </div>
                <div className="login-input">
                    <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        id="password"
                    //onChange={handleChange}
                    />
                </div>
                <div className="flex-row flex-end">
                    <button className="button" type="submit">LOGIN</button>
                </div>
            </form>
        </div>
    );

}

export default Login;
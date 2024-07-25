import React, { useState } from 'react';
import { useRef } from 'react';



const SignUp = () => {


    return (
        <div className="signup-container">
            <p className="fs-1 fw-bold text-center signup-logo">Sign Up</p>
            <form>
                <div className="signup-input">
                    <input
                        placeholder="Username"
                        name="username"
                        type="username"
                        id="username"
                    //onChange={handleChange}
                    />
                </div>
                <div className="signup-input">
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        id="email"
                    //onChange={handleChange}
                    />
                </div>
                <div className="signup-input">
                    <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        id="password"
                    //onChange={handleChange}
                    />
                </div>
                <div className="signup-input">
                    <input
                        placeholder="Confirm Password"
                        name="confirm-password"
                        type="password"
                        id="confirm-password"
                    //onChange={handleChange}
                    />
                </div>
                <div className="flex-row flex-end">
                    <button className="button" type="submit">SIGN UP</button>
                </div>
            </form>
        </div>
    );

}

export default SignUp;
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';


const SignUp = () => {

    // set default form state with email and password having no value 
    // assign ADD_USER mutation to addUser
    const [formState, setFormState] = useState({ email: '', password:''});
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //await mutation response and pass in username, email, and password variables and after this is complete set token and login
        const mutationResponse = await addUser({
            variables: {
                username: formState.username,
                email: formState.email,
                password: formState.password,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    //handle change of formState when user interacts with fields on screen
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };


    return (
        <div className="signup-container">
            <p className="fs-1 fw-bold text-center signup-logo">Sign Up</p>
            <form onSubmit={handleFormSubmit}>
                <div className="signup-input">
                    <input
                        placeholder="Username"
                        name="username"
                        type="username"
                        id="username"
                        onChange={handleChange}
                    />
                </div>
                <div className="signup-input">
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="signup-input">
                    <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                    />
                </div>
                {/* <div className="signup-input">
                    <input
                        placeholder="Confirm Password"
                        name="confirm-password"
                        type="password"
                        id="confirm-password"
                        onChange={handleChange}
                    />
                </div> */}
                <div className="flex-row flex-end">
                    <button className="button" type="submit">SIGN UP</button>
                </div>
            </form>
        </div>
    );

}

export default SignUp;
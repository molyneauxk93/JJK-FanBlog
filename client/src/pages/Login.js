import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";



const Login = () => {

    const [formState, setFormState] = useState({ email: "", password: "" });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const mutationResponse = await login({
                variables: {
                    email: formState.email,
                    password: formState.password,
                },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="login-container">
            <p className="fs-1 fw-bold text-center login-logo">Login</p>
            <form onSubmit={handleFormSubmit}>
                <div className="login-input">
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="login-input">
                    <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p className="error-text">
                            The provided credentials are incorrect
                        </p>
                    </div>
                ) : null}
                <div className="flex-row flex-end">
                    <button className="button" type="submit">LOGIN</button>
                </div>
            </form>
        </div>
    );

}

export default Login;
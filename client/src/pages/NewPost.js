import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { useMutation } from '@apollo/client';

//import add post mutation and query me
import { ADD_POST } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

import { useNavigate } from 'react-router-dom';




const AddPost = () => {

    const [formState, setFormState] = useState({ title: '', description: '', postAuthor: '' });
    const [addpost] = useMutation(ADD_POST);

    // navigate
    const navigate = useNavigate();

    //  use query me to obtain username for currently logged in user
    const { loading, data } = useQuery(QUERY_ME);


    // handle form submit and pass variabled to addpost mutation
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //get current logged in username using query me
        const userFilter = await data;
        console.log(userFilter.me.username);

        //pass form variables along with username retrieved from query to addpost mutation
        const mutationResponse = await addpost({
            variables: {
                title: formState.title,
                description: formState.description,
                postAuthor: userFilter.me.username,
            },
        });
        navigate("/");
        window.location.reload(false);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="newpost-container">
            <p className="fs-1 fw-bold text-center newpost-logo">New Post</p>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3 newpost-input" >
                    <input type="title" className="form-control" id="title" placeholder="Title"  name="title" onChange={handleChange}/>
                </div>
                <div className="mb-3 newpost-input">
                    <textarea className="form-control" type="description" id="description" rows="10" placeholder="Description" name="description" onChange={handleChange}></textarea>
                </div>
                <div>
                    <button className="button" type="submit">Create Post</button>
                </div>
            </form>
        </div>
    );
}

export default AddPost;
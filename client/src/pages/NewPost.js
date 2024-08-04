import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import Auth from '../utils/auth';


const AddPost = () => {

    const [formState, setFormState] = useState({ title: '', description: '', postAuthor: ''});
    const [addpost, { error }] = useMutation(ADD_POST);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

            const mutationResponse = await addpost({
                variables: {
                    title: formState.title,
                    description: formState.description,
                    postAuthor: formState.postAuthor,
                },
            });
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
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input 
                    placeholder="Title"
                    name="title"
                    type="text"
                    id="title"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                    placeholder="Enter Details"
                    name="description"
                    type="text"
                    id="description"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <button className="button" type="submit">Create Post</button>
                </div>
            </form>
        </div>
    );
}

export default AddPost;
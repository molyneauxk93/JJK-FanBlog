import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';




const AddPost = () => {

    const [formState, setFormState] = useState({ title: '', description: '', postAuthor: '' });
    const [addpost] = useMutation(ADD_POST);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const mutationResponse = await addpost({
            variables: {
                title: formState.title,
                description: formState.description,
                postAuthor: 'joshymol',
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
        <div className="newpost-container">
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
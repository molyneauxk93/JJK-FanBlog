import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { REMOVE_POST } from '../utils/mutations';

const MyPosts = (props) => {

    const [deletePost] = useMutation(REMOVE_POST);

    // Allows the logged in user on click to delete any of their personal posts by calling the REMOVE_POST mutation
    const handlePostDelete = async () => {

        const mutationResponse = await  deletePost({
            variables: {
                postId: props.data._id,
            },
        });
        window.location.reload(false);
    }
    // creates cards for mapped blog posts from the database which belong to the logged in user and presents them on the "my profile" page
    return (
        <div className="card w-75 text-center post-title">
            <div className="card-body">
                <h2 className="card-title blog-title cut-text">{props.data.title}</h2>
                <Link to={`/blogpost/${props.data._id}`}><button className="btn btn-primary myposts-button">View</button></Link>
                <button onClick={handlePostDelete} className="btn btn-primary myposts-button" style={{ backgroundColor: "red"}}>Delete</button>
            </div>
        </div>
    );

}

export default MyPosts;
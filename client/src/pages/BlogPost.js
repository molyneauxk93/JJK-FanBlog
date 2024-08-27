import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { BLOG_POST } from '../utils/queries';
import { ADD_COMMENT } from '../utils/mutations';



const BlogPost = () => {
    
    const [formState, setFormState] = useState({ commentText: '' });
    const [addComment] = useMutation(ADD_COMMENT);

    const { postId } = useParams();
    console.log(postId);
    
    // retrieves single blogpost based on the blog post ID taken from the route params 
    const { loading, data } = useQuery(BLOG_POST, {
        variables: {
            postId: postId,
        },
    });

    // passing post id and comment to mutation ADD_COMMENT and reloads the page once successfully completed 
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // pass variables to add comment to identified blogpost
        const mutationResponse = await addComment({
            variables: {
                postId: postId,
                commentText: formState.commentText,
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
    }


if (!data) {
    return <p className="fs-1 fw-bold text-center signup-logo">No available data to show.</p>
}

const blogpost = data?.blogpost;
console.log(data);


    return (
        <div className="blogpost-container">
            <p className="fs-1 fw-bold text-center signup-logo">{blogpost.title}</p>

            <p className="blogpost-text border border-info-subtle">{blogpost.description}</p>

            <p className="blogpost-text" style={{ textAlign:"right", margin: "25px"}}>Created by: {blogpost.postAuthor}</p>

            {/* comment text input goes before comment section */}
            <form onSubmit={handleFormSubmit}>
            <div className="comment-add-container">
                    <input
                        placeholder="Comment"
                        name="commentText"
                        type="commentText"
                        id="commentText"
                        onChange={handleChange}
                    />
                    <button className="comment-button" type="submit">Post</button>
                </div>
            
            </form>
            
            <p className="blogpost-text" style={{ textAlign:"left", margin: "25px", marginTop: "60px"}}>Comments:</p>
            {/* comment section to be map for list of comments */}
            <div>
                <ul>
                    {blogpost.comments.map((comments) => (
                        <div className="blogpost-text comment-border">
                            <li>{comments.commentText}</li>
                            <p>By: {comments.commentAuthor}</p>
                        </div>
                    ))}
                </ul>
            </div>

            

        </div>
    );

}

export default BlogPost;
import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { BLOG_POST } from '../utils/queries';

// Use params to get the id of a single blog post 
// then will take the id and run a use query to find single blogpost 
// from there will layout how I want a single blog post page to look below 
// on click from blog page and profile page - link to this page where you can see
// full blogpost and comments if any

const BlogPost = () => {
    
    const { postId } = useParams();
    console.log(postId);
    
    const { loading, data } = useQuery(BLOG_POST, {
        variables: {
            postId: postId,
        },
    });


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
            <form>
            <div className="comment-add-container">
                    <input
                        placeholder="Comment"
                        name="email"
                        type="email"
                        id="email"
                        // onChange={handleChange}
                    />
                    <button className="comment-button" type="submit">Post</button>
                </div>
            
            </form>
            
            <p className="blogpost-text" style={{ textAlign:"left", margin: "25px", marginTop: "60px"}}>Comments:</p>
            {/* comment section to be map for unordered list of comments TBA */}
            <p className="blogpost-text border border-info-subtle">
                <ul>
                    <li>Comment number 1</li>
                    <li>Comment number 2</li>
                    <li>Comment number 3</li>
                    <li>Comment number 4</li>
                </ul>
            </p>

            

        </div>
    );

}

export default BlogPost;
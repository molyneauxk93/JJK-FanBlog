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
        <div>
            <p className="fs-1 fw-bold text-center signup-logo">{blogpost.title}</p>

            <p>{blogpost.description}</p>

        </div>
    );

}

export default BlogPost;
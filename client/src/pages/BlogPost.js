import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";


// Use params to get the id of a single blog post 
// then will take the id and run a use query to find single blogpost 
// from there will layout how I want a single blog post page to look below 
// on click from blog page and profile page - link to this page where you can see
// full blogpost and comments if any

const BlogPost = () => {
    

    return (
        <p>Page to Render single blog post</p>
    );

}

export default BlogPost;
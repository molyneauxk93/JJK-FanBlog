import React from 'react';
import { useQuery } from "@apollo/client";

import BlogPosts from '../components/BlogPosts';
import { BLOG_POSTS } from '../utils/queries';

const Blog = () => {

    //use query to bring in blogposts
    const { loading, data } = useQuery(BLOG_POSTS);
    const blogposts = data?.blogposts;


    // If still loading data, return 'loading' , otherwise map blogpost data
    if(loading) {
        return (
            <div>
                <p className="blog-title">Loading....</p>
            </div>
        );
    }
    return (
        // map blogpost titles to component which will render cards for each 
        <div>
            <p className="fs-1 fw-bold text-center signup-logo">Blog Posts</p>
            {
                blogposts.map((posttitles) => <BlogPosts data={posttitles} />)
            }
        </div>
    );
}

export default Blog;
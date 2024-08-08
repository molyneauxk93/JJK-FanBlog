import React from 'react';
import { useQuery } from "@apollo/client";

import BlogPosts from '../components/BlogPosts';
import { BLOG_POSTS } from '../utils/queries';

export default function Blog() {

    //use query to bring in blogposts
    const { loading, data } = useQuery(BLOG_POSTS);



    // return blogpost object with data to be loaded into the photos page
    return (

        <div onLoad={loadBlogPosts}>
            {
                blogposts.map((posttitles) => <BlogPosts data={posttitles} />)
            }
        </div>
    );
}
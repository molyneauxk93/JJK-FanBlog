import React from 'react';
import { useQuery } from "@apollo/client";

import BlogPosts from '../components/BlogPosts';
import { BLOG_POSTS } from '../utils/queries';

export default function Blog() {

    //use query to bring in blogposts
    const { loading, data } = useQuery(BLOG_POSTS);
    const blogposts1 = data?.blogposts;

    console.log(blogposts1);

    const  blogposts = [
        {
            title: "Test title 1 is a test",
        },
        {
            title: "Test title 2 is a test",
        },
        {
            title: "Test title 3 is a test",
        },
        {
            title: "Test title 4 is a test",
        },
        {
            title: "Hello",
        },
        {
            title: "Hello",
        },
        {
            title: "Hello",
        },
        {
            title: "Hello",
        },
    ];

    // return blogpost object with data to be loaded into the photos page
    return (

        <div>
            {
                blogposts.map((posttitles) => <BlogPosts data={posttitles} />)
            }
        </div>
    );
}
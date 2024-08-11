import React from 'react';
import { useQuery } from "@apollo/client";

import BlogPosts from '../components/BlogPosts';
import { BLOG_POSTS } from '../utils/queries';

export default function Blog() {

    //use query to bring in blogposts
    const { loading, data } = useQuery(BLOG_POSTS);
    const blogposts1 = data?.blogposts;


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

    // If still loading data, return 'loading' , otherwise map blogpost data
    if(loading) {
        return (
            <div>
                <p className="blog-title">Loading....</p>
            </div>
        );
    }
    return (

        <div>
            {
                blogposts1.map((posttitles) => <BlogPosts data={posttitles} />)
            }
        </div>
    );
}
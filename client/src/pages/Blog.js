import React from 'react';
import BlogPosts from '../components/BlogPosts';

export default function Blog() {
    // Create object with blogposts to render 
    const blogposts = [
        {
            title: 'Test title 1 is this a good test'
        },
        {
            title: 'Test title 2 is this a good test'
        },
        {
            title: 'Test title 3 is this a good test'
        },
        {
            title: 'Test title 4 is this a good test'
        },
        {
            title: 'Test title 5 is this a good test'
        },
        {
            title: 'Test title 6 is this a good test'
        },
        {
            title: 'Test title 7 is this a good test'
        },
    ]

    // return blogpost object with data to be loaded into the photos page
    return (
        <div>
            {
                blogposts.map((posttitles) => <BlogPosts data={posttitles} />)
            }
        </div>
    );
}
import React from 'react';
import BlogPosts from '../components/BlogPosts';

export default function Blog() {
    // Create object with blogposts to render 
    const blogposts = [
        {

        }
    ]

    // return blogpost object with data to be loaded into the photos page
    return (
        <div>
            {
                blogposts.map((photos) => <BlogPosts data={photos} />)
            }
        </div>
    );
}
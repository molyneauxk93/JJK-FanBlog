import React from 'react';


const BlogPosts = (props) => {

    return (
        <div class="card text-white bg-primary mb-3" style={{ maxwidth:'18rem', margin: '30px' }}>
            {/* will make this link to full blog post with comments */}
            <div class="card-header" style={{ textAlign: 'center'}}>Blog Post Title</div>
        </div>
    );

}

export default BlogPosts;
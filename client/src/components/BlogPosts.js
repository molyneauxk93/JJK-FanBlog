import React from 'react';


const BlogPosts = (props) => {

    return (
        <div className="card w-75 text-center post-title">
            <div className="card-body">
                <h2 className="card-title blog-title cut-text">Card title</h2>
                <button className="btn btn-primary button">View Post</button>
            </div>
        </div>
    );

}

export default BlogPosts;
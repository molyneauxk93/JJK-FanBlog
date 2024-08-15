import React from 'react';
import { Link } from 'react-router-dom';


const BlogPosts = (props) => {

    return (
        <div className="card w-75 text-center post-title">
            <div className="card-body">
                <h2 className="card-title blog-title cut-text">{props.data.title}</h2>
                <Link to={`/blogpost/${props.data._id}`}><button className="btn btn-primary button">View Post</button></Link>
            </div>
        </div>
    );

}

export default BlogPosts;
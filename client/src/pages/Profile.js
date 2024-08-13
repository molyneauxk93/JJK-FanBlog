import React from 'react';
import { useQuery } from "@apollo/client";

import BlogPosts from '../components/BlogPosts';
import { QUERY_ME } from '../utils/queries';



const Profile = () => {

    //use query to bring in username and user's blogposts
    const { loading, data } = useQuery(QUERY_ME);
    const me = data?.me.blogPost;

    console.log(me);

    // If still loading data, return 'loading' , otherwise map blogpost data
    if (loading) {
        return (
            <div>
                <p className="blog-title">Loading....</p>
            </div>
        );
    }

    return (
        <div>
            <p className="blog-title">'s Posts</p>

        {
            me.map((myPosts) => <BlogPosts data={myPosts}/>)
        }

        </div>

    );

}

export default Profile;
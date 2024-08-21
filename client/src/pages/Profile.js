import React from 'react';
import { useQuery } from "@apollo/client";

import MyPosts from '../components/MyPosts';
import { QUERY_ME } from '../utils/queries';



const Profile = () => {

    //use query to bring in username and user's blogposts
    const { loading, data } = useQuery(QUERY_ME);
    const me = data?.me;

    console.log(data);

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
            <p className="fs-1 fw-bold text-center signup-logo">{me.username}'s Posts</p>

        {
            me.blogPost?.map((myPosts) => <MyPosts data={myPosts}/>)
        }

        </div>

    );

}

export default Profile;
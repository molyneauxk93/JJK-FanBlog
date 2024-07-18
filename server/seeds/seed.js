const db = require('../config/connection');

// require models to seed
const { User, BlogPost } = require('../models');

// user and blogpost seeds require 
const userSeeds = require('./userSeeds.json');
const blogPostSeeds = require('./blogPostSeeds.json');

db.once('open', async () => {

    try {
        // delete ran on User and Blogpost

        await User.deleteMany({});
        await BlogPost.deleteMany({});

        await User.create(userSeeds);

        // for loop to create a blogpost and assign 
        // it's id to a user by username search and update
        for(let i=0; i < blogPostSeeds.length; i++) {
            const { _id, postAuthor } = await BlogPost.create(blogPostSeeds[i]);

            const user = await User.findOneAndUpdate(
                { username: postAuthor },
                {
                    $addToSet: {
                        blogPost: _id,
                    },
                }
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});

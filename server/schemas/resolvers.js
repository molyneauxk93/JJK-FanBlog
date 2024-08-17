const { AuthenticationError } = require('apollo-server-express');
const { User, BlogPost } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('blogPost');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('blogPost');
    },
    blogposts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return BlogPost.find(params);
    },
    blogpost: async (parent, { postId }) => {
      return BlogPost.findOne({ _id: postId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id }).populate("blogPost");
        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, { title, description, postAuthor }, context) => {
      if (context.user) {
        const blogPost = await BlogPost.create({
          title, description, postAuthor,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { blogPost: blogPost._id } }
        );

        return blogPost;
      }
      throw new AuthenticationError('You need to be logged in!');

    },
    addComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {

        return BlogPost.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const blogpost = await BlogPost.findOne({ _id: postId });

        if(!property) {
          throw new Error("Blogpost not found");
        }

        if(blogpost.postAuthor.toString() !== context.user._id) {
          throw new AuthenticationError('You are not authorized to remove this post');
        }

        await blogpost.remove();

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: {BlogPost: blogpost._id } }
        );

        return blogpost;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;

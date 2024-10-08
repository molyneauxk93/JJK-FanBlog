const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query { 
    me: User
    users: [User]
    user(username: String!): User
    blogposts(username: String): [BlogPost]
    blogpost(postId: ID!): BlogPost
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    blogPost: [BlogPost]
    favorites: [BlogPost]
  }

  type BlogPost {
    _id: ID
    title: String!
    description: String!
    postAuthor: String!
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String!
    commentAuthor: String!
  }

  type Auth { 
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(title: String!, description: String!, postAuthor: String!): BlogPost
    addComment(postId: ID!, commentText: String!): BlogPost
    removePost(postId: ID!): BlogPost
  }
`;

module.exports = typeDefs;

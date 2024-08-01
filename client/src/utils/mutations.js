import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_POST = gql`
mutation Mutation($title: String!, $description: String!, $postAuthor: String!) {
  addPost(title: $title, description: $description, postAuthor: $postAuthor) {
    _id
    title
    description
    postAuthor
    createdAt
  }
}
`;


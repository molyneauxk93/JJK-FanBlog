import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
 me {
    _id
    username
    email
    blogPost {
      _id
      title
      description
      postAuthor
      comments {
        _id
        commentAuthor
        commentText
      }
    }
  }
}
`;

export const BLOG_POSTS = gql`
{
  blogposts {
    _id
    title
    description
    postAuthor
  }
}
`;

export const BLOG_POST = gql`
query Query($postId: ID!) {
 blogpost(postId: $postId) {
    _id
    title
    description
    postAuthor
    comments {
      _id
      commentAuthor
      commentText
    }
  }
}
`;

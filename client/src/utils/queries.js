import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
 me {
    _id
    blogPost {
      _id
      title
      description
      comments {
        commentText
        commentAuthor
      }
    }
    username
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

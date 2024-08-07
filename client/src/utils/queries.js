import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
 me {
    _id
    blogPost {
      _id
      comments {
        commentText
        commentAuthor
      }
    }
    username
  }
}
`;
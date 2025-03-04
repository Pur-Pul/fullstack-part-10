import { gql } from '@apollo/client';

export const SIGN_IN = gql`
    mutation Login($username: String!, $password: String!) {
        authenticate(credentials: { username: $username, password: $password }) {
           accessToken
        }
    }
`;

export const SUBMIT_REVIEW = gql`
    mutation CreateReview($review: CreateReviewInput!) {
        createReview(review: $review) {
            repositoryId
        }
    }
`

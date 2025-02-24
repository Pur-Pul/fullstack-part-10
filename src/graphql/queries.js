import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query Repositories {
        repositories {
            edges {
                node {
                    stargazersCount
                    forksCount
                    reviewCount
                    ratingAverage
                    ownerAvatarUrl
                    fullName
                    description
                    language
                    id
                }
            }
        }
    }
`;

import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query Repositories($after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection $searchKeyword: String) {
        repositories(first: 7, after: $after orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
            pageInfo {
                endCursor
                startCursor
                hasNextPage
            }
        }
    }
`;

export const GET_REPOSITORY = gql`
    query Repository($id: ID!, $after: String) {
        repository(id: $id) {
            stargazersCount
            forksCount
            reviewCount
            ratingAverage
            ownerAvatarUrl
            fullName
            description
            language
            id
            url
            reviews(first: 7, after: $after) {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
            }
        }
    }
`
export const GET_CURRENT_USER = gql`
    query Me($includeReviews: Boolean = false) {
        me {
            id
            username
            reviews @include(if: $includeReviews) {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        repository {
                            id
                            fullName
                        }
                    }
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
            }
        }
    }
`

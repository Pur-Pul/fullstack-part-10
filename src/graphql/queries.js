import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection $searchKeyword: String) {
        repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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

export const GET_REPOSITORY = gql`
    query Repository($id: ID!) {
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
            reviews {
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
            }
        }
    }
`

export const GET_CURRENT_USER = gql`
    query Me($includeReviews: Boolean = false){
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
            }
        }
    }
`

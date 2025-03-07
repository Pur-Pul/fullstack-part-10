import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';


const useMe = (includeReviews = false) => {
    const variables = { includeReviews };
    const { data, loading, fetchMore, ...result } = useQuery(GET_CURRENT_USER, { variables, fetchPolicy: 'cache-and-network' });
    /*
    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;
        if (!canFetchMore) {
            console.log('can not fetch more')
            return;
        } else {
            console.log('fetching more')
        }
    
        fetchMore({
            variables: {
                after: data.me.reviews.pageInfo.endCursor,
                ...variables,
            },
        });
    };
    */
    return {
        user: data?.me,
        loading,
        ...result,
    };
};

export default useMe;
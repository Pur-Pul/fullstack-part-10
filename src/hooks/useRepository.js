import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';


const useRepository = (id) => {
    if (!id) { return {repository: null, fetchMore: () => {}, loading: null} }

    const variables = { id }
    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, { fetchPolicy: 'cache-and-network', variables });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
        if (!canFetchMore) {
            console.log('can not fetch more')
            return;
        } else {
            console.log('fetching more')
        }
    
        fetchMore({
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    return {
        repository: data?.repository,
        fetchMore: handleFetchMore,
        loading,
        ...result,
    };
};

export default useRepository;
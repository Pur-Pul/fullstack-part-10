import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';


const useMe = (includeReviews = false) => {
    const { data, loading, refetch } = useQuery(GET_CURRENT_USER, { variables: { includeReviews }, fetchPolicy: 'cache-and-network' });

    if (loading) {
        return { data, loading, refetch }
    }

    return { user: data.me, loading, refetch };
};

export default useMe;
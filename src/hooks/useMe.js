import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER, GET_REPOSITORIES } from '../graphql/queries';


const useMe = () => {
    const { data, loading, refetch } = useQuery(GET_CURRENT_USER, { fetchPolicy: 'cache-and-network' });

    if (loading) {
        return { data, loading, refetch }
    }

    return { user: data.me, loading, refetch };
};

export default useMe;
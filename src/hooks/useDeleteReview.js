import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_CURRENT_USER } from '../graphql/queries';
import { useMutation } from '@apollo/client';

const useDeleteReview = () => {

    const [mutate, result] = useMutation(DELETE_REVIEW);
    const deleteReview = async (deleteReviewId) => {
        console.log(`delete ${deleteReviewId}`)
        const { data } = await mutate({ 
            variables: { deleteReviewId },
            refetchQueries: () => [{
                query: GET_CURRENT_USER,
                variables: { includeReviews }, 
                fetchPolicy: 'cache-and-network'
            }],
        });
        return data;
    };
  
    return [deleteReview, result];
};

export default useDeleteReview;
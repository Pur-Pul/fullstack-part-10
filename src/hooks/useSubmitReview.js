import { SUBMIT_REVIEW } from '../graphql/mutations';
import { useMutation } from '@apollo/client';


const useSubmitReview = () => {

    const [mutate, result] = useMutation(SUBMIT_REVIEW);
    const submitReview = async ({ ownerName, rating, repositoryName, text }) => {
        const review = text == "" ? { ownerName, rating, repositoryName } : { ownerName, rating, repositoryName, text }
        const { data } = await mutate({ variables: { review }});
        
        return data;
    };
  
    return [submitReview, result];
};

export default useSubmitReview;
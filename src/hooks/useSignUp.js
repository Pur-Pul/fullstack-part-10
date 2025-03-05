import { SIGN_UP } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

const useSignUp = () => {
    const [mutate, result] = useMutation(SIGN_UP);
    const signUp = async ({ user }) => {
        const { data } = await mutate({ variables: { user } });
        return data;
    };
  
    return [signUp, result];
};

export default useSignUp;
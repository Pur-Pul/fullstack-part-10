import { SIGN_IN } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);
  
    const signIn = async ({ username, password }) => {
        token = await mutate({ variables: { username, password }})
        return token
    };
  
    return [signIn, result];
};

export default useSignIn;
import { SIGN_IN } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const [mutate, result] = useMutation(SIGN_IN);
    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: { username, password }});
        await authStorage.setAccessToken(data.authenticate.accessToken);
        apolloClient.resetStore();
        return data;
    };
  
    return [signIn, result];
};

export default useSignIn;
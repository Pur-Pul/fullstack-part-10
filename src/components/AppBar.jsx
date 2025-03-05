import { StyleSheet, ScrollView, View, Pressable } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import useMe from '../hooks/useMe';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
    flexcontainer: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#24292e",
        flexDirection: 'row',
        flexGrow: 0
    },
    flexchild: {
        flexGrow: 1,
    }
});

const AppBar = () => {
    const { user } = useMe();
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const signOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
    }

    return ( 
        <View style={styles.flexcontainer}>
            <ScrollView contentContainerStyle={styles.flexchild} horizontal>
                <AppBarTab tab={{name:"Repositories", dest:"/"}}/>
                { user ?<AppBarTab tab={{name:"Create a review", dest:'/create-review'}} /> : null }
                { user ? 
                    <AppBarTab tab={{name: "Sign out", dest:"/"}} onPress={signOut}/>
                    : 
                    <AppBarTab tab={{name:"Sign in", dest:"/sign-in"}} />
                }
                { user ? null : <AppBarTab tab={{name:"Sign up", dest:"/sign-up"}} /> }
            </ScrollView>
        </View>
    );
};

export default AppBar;
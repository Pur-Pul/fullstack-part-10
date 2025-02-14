import { StyleSheet } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#24292e",
    }
});

const AppBar = () => {
    return <Text style={styles.container}>
        <AppBarTab tab={{name:"Repositories", dest:"/"}}/>
        <AppBarTab tab={{name:"Sign in", dest:"/sign-in"}} />
    </Text>;
};

export default AppBar;
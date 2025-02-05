import { View, Text, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from './theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#24292e",
    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <AppBarTab tab={{name:"Repositories"}}/>
    </View>;
};

export default AppBar;
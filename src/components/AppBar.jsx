import { StyleSheet, ScrollView, View } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

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
    return ( 
        <View style={styles.flexcontainer}>
            <ScrollView contentContainerStyle={styles.flexchild} horizontal>
                <AppBarTab tab={{name:"Repositories", dest:"/"}}/>
                <AppBarTab tab={{name:"Sign in", dest:"/sign-in"}} />
            </ScrollView>
        </View>
    );
};

export default AppBar;
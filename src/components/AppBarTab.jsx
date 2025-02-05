import { Text, StyleSheet, Pressable } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
    tab: {
        color: "#ffffff",
        fontSize: theme.fontSizes.subheading,
        margin: 15
    }
});

const AppBarTab = ({ tab }) => {
    return <Pressable><Text style={styles.tab}>{tab.name}</Text></Pressable>;
};

export default AppBarTab;
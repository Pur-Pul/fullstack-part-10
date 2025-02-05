import { Text, StyleSheet, View } from 'react-native';
import theme from './theme';
const styles = StyleSheet.create({
    item: {
        fontSize: theme.fontSizes.body,
    }
});
const RepositoryItem = ({ item }) => {
    return (
        <Text style={styles.item}>{
            `Full name: ${ item.fullName }\nDescription: ${ item.description }\nLanguage: ${ item.language }\nStars: ${ item.stargazersCount }\nForks: ${ item.forksCount }\nReviews: ${ item.reviewCount }\nRating: ${ item.ratingAverage }`
        }</Text>
    );
};

export default RepositoryItem;
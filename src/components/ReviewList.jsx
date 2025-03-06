import Review from "./Review";
import { StyleSheet, FlatList, View } from "react-native";

const styles = StyleSheet.create({
    separator: {
        height: 10
    },
});

const ReviewList = ({ reviewNodes, header=null }) => {
    const ItemSeparator = () => <View style={styles.separator} />;
    return(
        <FlatList
            data={reviewNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({item}) => <Review review={item} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => header}
        />
    );
};

export default ReviewList;

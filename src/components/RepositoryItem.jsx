import { StyleSheet, View, Image } from 'react-native';
import Text from './Text';
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
    },
    image_container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection:'row',
        alignSelf: 'flex-start'
    },
    stat: {
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft:20,
        paddingRight:20,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 4
    }
});

const Details = ({ item }) => {
    return (
        <View style={{marginLeft: 10}}>
            <Text fontSize="subheading" fontWeight="bold" style={{alignSelf: 'flex-start'}}>{`${ item.fullName }`}</Text>
            <Text fontSize="body" color="textSecondary" style={{alignSelf: 'flex-start'}}>{`${ item.description }`}</Text> 
            <Text fontSize="subheading" fontWeight="bold" color="inverted" bgColor="primary" style={{alignSelf: 'flex-start', padding: 5, marginTop: 5, borderRadius: 4}}>{`${ item.language }`}</Text>
        </View>
    );
};

const Stat = ({ stat }) => {
    return (
        <View style={styles.stat}>
            <Text fontSize="subheading" fontWeight="bold" style={{alignSelf: 'flex-start'}}>{stat.count < 1000 ? stat.count : Math.round(stat.count / 100) / 10 + "k"}</Text>
            <Text fontSize="body" color="textSecondary" style={{alignSelf: 'flex-start'}}>{stat.name}</Text>
        </View>
    )
};

const RepositoryItem = ({ item }) => {

    return (
    <View style={styles.container}>
        <View style={styles.image_container}>
            <Image style={styles.logo} source={{uri: item.ownerAvatarUrl}}></Image>
            <Details item={item}/>
        </View>
        <Text>
            <Stat stat={{count: item.stargazersCount, name: "Stars"}}/>
            <Stat stat={{count: item.forksCount, name: "Forks"}}/>
            <Stat stat={{count: item.reviewCount, name: "Reviews"}}/>
            <Stat stat={{count: item.ratingAverage, name: "Rating"}}/>
        </Text>
    </View>
        
    );
};

export default RepositoryItem;
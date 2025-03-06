import { FlatList, StyleSheet, View, Image, Pressable } from 'react-native';
import Text from './Text';
import useRepository from '../hooks/useRepository';
import { useNavigate, useParams } from 'react-router-native';
import * as Linking from 'expo-linking';
import Review from './Review';
import ReviewList from './ReviewList';

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
    },
    button: {
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
        margin: 15,
        borderRadius: 4,
        padding: 10
    },
    separator: {
        height: 10
    },
});

const Details = ({ item }) => {
    return (
        <View style={{marginLeft: 10, flexShrink: 1}}>
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

const GitHub = ({ url }) => {
    
    return (
        <View>
            <Pressable onPress={() => Linking.openURL(url)}><Text fontSize="subheading" fontWeight="bold" color="inverted" bgColor="primary" style={ styles.button }>Open in GitHub</Text></Pressable>
        </View>
    );
};

const RepositoryInfo = ({ item }) => {
    const navigate = useNavigate()
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigate(`/repo/${item.id}`)}>
                <View style={styles.image_container}>
                    <Image style={styles.logo} source={{uri: item.ownerAvatarUrl}}></Image>
                    <Details item={item}/>
                </View>
            </Pressable>
            <Text>
                <Stat stat={{count: item.stargazersCount, name: "Stars"}}/>
                <Stat stat={{count: item.forksCount, name: "Forks"}}/>
                <Stat stat={{count: item.reviewCount, name: "Reviews"}}/>
                <Stat stat={{count: item.ratingAverage, name: "Rating"}}/>
            </Text>
            { item.url ? <GitHub url={ item.url }/> : null }
        </View>
    );
}

const RepositoryItem = ({ item }) => {
    const { id } = useParams()
    
    if (id) {
        result = useRepository(id)
        if (result.loading) { return <Text>Loading...</Text>}
        item = result.repository
    }
    const reviewNodes = item.reviews ? item.reviews.edges.map(edge => edge.node) : [];
    return (
    <View testID="repositoryItem" style={{flex: 1}}>
        <ReviewList reviewNodes={reviewNodes} header={<RepositoryInfo item={item} />}/>
    </View>
    );
};

export default RepositoryItem;
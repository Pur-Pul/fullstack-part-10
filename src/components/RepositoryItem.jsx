import { Text, StyleSheet, View, Image } from 'react-native';
import theme from './theme';
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
    name: {
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.textPrimary,
        alignSelf: 'flex-start',
    },
    description: {
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.normal,
        color: theme.colors.textSecondary,
        alignSelf: 'flex-start',
    },
    language: {
        fontSize: theme.fontSizes.subheading,
        backgroundColor: theme.colors.primary,
        color: theme.colors.inverted,
        alignSelf: 'flex-start',
        padding: 5,
        marginTop: 5,
        borderRadius:4,
    },
    details: {
        marginLeft: 10
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
        <View style={styles.details}>
            <Text style={styles.name}>{`${ item.fullName }`}</Text>
            <Text style={styles.description}>{`${ item.description }`}</Text> 
            <Text style={styles.language}>{`${ item.language }`}</Text>
        </View>
    );
};

const Stat = ({ stat }) => {
    return (
        <View style={styles.stat}>
            <Text style={styles.name}>{stat.count < 1000 ? stat.count : Math.round(stat.count / 100) / 10 + "k"}</Text>
            <Text style={styles.description}>{stat.name}</Text>
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
import { StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from '../theme';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        flexDirection: 'row'
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
    button: {
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
        margin: 15,
        borderRadius: 4,
        padding: 10
    },
    circle: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 50 / 2,
        borderColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    score: {
        textAlign: 'center',
        textAlignVertical: 'center' 
    }
});

const Score = ({ score }) => {
    return (
        <View style={styles.circle}>
            <Text color={'primary'} fontSize={'heading'} fontWeight={'bold'} style={styles.score}>{score}</Text>
        </View>
    );
};

const Details = ({ name, createdAt, text }) => {
    const [date,time] = createdAt.split('T')
    const [year, month, day] = date.split('-')
    return (
        <View style={{marginLeft: 10, flexShrink: 1}}>
            <Text fontSize={'subheading'} fontWeight={'bold'}>{name}</Text>
            <Text>{format(new Date(year, month-1, day), 'dd.MM.yyyy')}</Text>
            <Text>{text}</Text>
        </View>
    );
};

const Review = ({ review }) => {
    return (
        <View style={styles.container}>
            <Score style={{flexShrink: 1}} score={ review.rating }></Score>
            <Details style={{flexShrink: 5}} name={ review.user.username } createdAt={ review.createdAt } text={ review.text }></Details>
        </View>
    );
};

export default Review;
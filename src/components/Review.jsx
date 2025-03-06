import { StyleSheet, View, Pressable, Alert } from "react-native";
import Text from "./Text";
import theme from '../theme';
import { format } from 'date-fns'
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";

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
        margin: 10,
        borderRadius: 4,
        padding: 15,
        paddingLeft: 25,
        paddingRight: 25,

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

const Details = ({ title, createdAt, text }) => {
    const [date,time] = createdAt.split('T')
    const [year, month, day] = date.split('-')
    return (
        <View style={{marginLeft: 10, flexShrink: 1}}>
            <Text fontSize={'subheading'} fontWeight={'bold'}>{title}</Text>
            <Text>{format(new Date(year, month-1, day), 'dd.MM.yyyy')}</Text>
            <Text>{text}</Text>
        </View>
    );
};

const deleteAlert = (deleteReview, id) => Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'CANCEL',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'DELETE', onPress: () => deleteReview(id)},
    ]
);

const Actions = ({ review }) => {
    const repository = review.repository
    if (!repository) { return null }
    const navigate = useNavigate()
    const [deleteReview] = useDeleteReview()
    return (
        <View style={{flexDirection: 'row'}}>
            <Pressable onPress={() => navigate(`/repo/${repository.id}`)}>
                <Text fontSize="subheading" fontWeight="bold" color="inverted" bgColor="primary" style={ styles.button }>View repository</Text>
            </Pressable>
            <Pressable onPress={() => deleteAlert(deleteReview, review.id)}>
                <Text fontSize="subheading" fontWeight="bold" color="inverted" bgColor="error" style={ styles.button }>Delete review</Text>
            </Pressable>
        </View>
    )
};

const Review = ({ review }) => {
    return (
        <View style={{... styles.container, padding: 0, flexDirection: 'column'}}>
            <View style={styles.container}>
                <Score style={{flexShrink: 1}} score={ review.rating }></Score>
                <Details style={{flexShrink: 5}} title={ review.user ? review.user.username : review.repository.fullName } createdAt={ review.createdAt } text={ review.text }></Details>
            </View>
            <Actions review={review} />
        </View>
    );
};

export default Review;
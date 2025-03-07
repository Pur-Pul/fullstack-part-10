import ReviewList from "./ReviewList";
import useMe from "../hooks/useMe";
import Text from "./Text";

const MyReviews = () => {
    const { user, loading } = useMe(includeReviews = true);
    if (loading) return <Text>Loading...</Text>
    //const onEndReach = () => {
    //    console.log('You have reached the end of the list');
     //   fetchMore();
    //};
    
    const reviewNodes = user.reviews ? user.reviews.edges.map(edge => edge.node) : [];
    if (reviewNodes.length == 0) {
        return <Text>You haven't made any reviews yet</Text>
    }
    return <ReviewList reviewNodes={reviewNodes} onEndReach={() => {}}/>;
};

export default MyReviews;
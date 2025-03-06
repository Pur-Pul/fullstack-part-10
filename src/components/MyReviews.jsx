import ReviewList from "./ReviewList";
import useMe from "../hooks/useMe";
import Text from "./Text";

const MyReviews = () => {
    const data = useMe(includeReviews = true);
    console.log(data)
    if (data.loading) return <Text>Loading...</Text>
    const user = data.user;
    const reviewNodes = user.reviews ? user.reviews.edges.map(edge => edge.node) : [];
    if (reviewNodes.length == 0) {
        return <Text>You haven't made any reviews yet</Text>
    }
    return <ReviewList reviewNodes={reviewNodes} />;
};

export default MyReviews;
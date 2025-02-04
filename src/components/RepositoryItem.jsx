const RepositoryItem = ({ item }) => {
    return (
        <div>
            Full name: { item.fullName }<br/>
            Description: { item.description }<br/>
            Language: { item.language }<br/>
            Stars: { item.stargazersCount }<br/>
            Forks: { item.forksCount }<br/>
            Reviews: { item.reviewCount }<br/>
            Rating: { item.ratingAverage }<br/>
        </div>
    );
};

export default RepositoryItem;
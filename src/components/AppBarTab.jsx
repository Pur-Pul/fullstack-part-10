import { Pressable } from 'react-native';
import Text from './Text';
import { useNavigate } from 'react-router-native';


const AppBarTab = ({ tab, onPress = () => {} }) => {
    const navigate = useNavigate()
    return (
        <Pressable onPress={() => {
                onPress();
                navigate(tab.dest);
            }} style={({pressed}) => [{backgroundColor: pressed ?  'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0)'}]}>
            <Text color="inverted" fontSize="subheading" style={{margin: 15}}>{tab.name}</Text>
        </Pressable>
    )
};



export default AppBarTab;
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, sort='CREATED_AT;DESC', setSort=()=>{} }) => {
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];
  

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem item={item}/>}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => 
        <Picker selectedValue={sort} onValueChange={(itemValue, itemIndex) => setSort(itemValue)}>
          <Picker.Item label='Latest repositories' value='CREATED_AT;DESC' />
          <Picker.Item label='Oldest repositories' value='CREATED_AT;ASC' />
          <Picker.Item label='Highest rated repositories' value='RATING_AVERAGE;DESC' />
          <Picker.Item label='Lowest rated repositories' value='RATING_AVERAGE;ASC' />
        </Picker>
      }
    />
  );
}

const RepositoryList = () => {
  const [sort, setSort] = useState('CREATED_AT;DESC')
  const [orderBy, orderDirection] = sort.split(';')
  const { repositories } = useRepositories({ orderBy, orderDirection });
  
  return <RepositoryListContainer repositories={ repositories } sort={sort} setSort={setSort}/>;
  
};

export default RepositoryList;
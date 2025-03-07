import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import React from 'react';
import TextInput from './TextInput';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const RepositoryListHeader = ({ sort, setSort, search, setSearch}) => {
  
  return (
    <View>
      <TextInput
        placeholder="Search..."
        value={ search }
        onChangeText={ text => setSearch(text) }
      />
      <Picker selectedValue={sort} onValueChange={(itemValue, itemIndex) => setSort(itemValue)}>
        <Picker.Item label='Latest repositories' value='CREATED_AT;DESC' />
        <Picker.Item label='Oldest repositories' value='CREATED_AT;ASC' />
        <Picker.Item label='Highest rated repositories' value='RATING_AVERAGE;DESC' />
        <Picker.Item label='Lowest rated repositories' value='RATING_AVERAGE;ASC' />
      </Picker>
    </View>
  );
}

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    // this.props contains the component's props
    const props = this.props;

    // ...

    return (
      <RepositoryListHeader
        sort={ props.sort }
        setSort={ props.setSort }
        search={ props.search }
        setSearch={ props.setSearch }
      // ...
      />
    );
  };

  ItemSeparator = () => <View style={styles.separator} />;

  render() {
    
    const repositoryNodes = this.props.repositories ? this.props.repositories.edges.map(edge => edge.node) : [];
    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={this.ItemSeparator}
        renderItem={({item}) => <RepositoryItem item={item}/>}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const RepositoryList = () => {
  const [sort, setSort] = useState('CREATED_AT;DESC')
  const [search, setSearch] = useState('')
  const [searchKeyword] = useDebounce(search, 500)
  const [orderBy, orderDirection] = sort.split(';')
  const { repositories, fetchMore } = useRepositories({ orderBy, orderDirection, searchKeyword });
  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };
  return <RepositoryListContainer 
    repositories={ repositories }
    sort={sort}
    setSort={setSort}
    search={search}
    setSearch={setSearch}
    onEndReach={onEndReach}
  />;
  
};

export default RepositoryList;
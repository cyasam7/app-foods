import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { styles } from './styles';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} />
      <TextInput style={styles.input} placeholder="Busca tu comida favorita" />
    </View>
  );
};

export default SearchBar;

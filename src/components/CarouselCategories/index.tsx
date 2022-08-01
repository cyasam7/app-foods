import React from 'react';
import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './styles';

const CarouselCateries = () => {
  const Categories = [
    'Carnes',
    'Ensaladas',
    'Burritos',
    'Hamburguesas',
    'Burritos',
    'Hamburguesas',
    'Burritos',
    'Hamburguesas',
    'Burritos',
    'Hamburguesas',
  ];

  const Item = ({ item }: { item: string }) => (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={Categories}
      horizontal
      contentContainerStyle={styles.list}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <Item item={item} />}
    />
  );
};

export default CarouselCateries;

import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CarouselCateries from '../../components/CarouselCategories';
import CarouselProduct from '../../components/CarouselProduct';

import HeaderHome from '../../components/HeaderHome';
import SearchBar from '../../components/SearchBar';

import { styles } from './styles';

const Products = () => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={[styles.screen]}>
      <View style={styles.header}>
        <HeaderHome />
        <SearchBar />
        <CarouselCateries />
      </View>
      <View style={styles.mainSection}>
        <CarouselProduct />
      </View>
    </SafeAreaView>
  );
};

export default Products;

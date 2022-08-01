import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './styles';

const CarouselProduct = () => {
  const data = new Array(10).fill(1);

  const ItemProduct = () => {
    return (
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://www.pngmart.com/files/5/Hamburger-PNG-Free-Download.png',
          }}
          style={styles.cardImage}
        />
        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
          <Text style={styles.cardFood}>Hamburguesa</Text>
          <View style={styles.cardContent}>
            <View style={styles.containerDollar}>
              <Feather name="dollar-sign" color="#707070" size={14} />
              <Text>100.0</Text>
            </View>
            <View style={styles.containerStars}>
              <Text style={{ marginRight: 2 }}>✩</Text>
              <Text>4.6</Text>
            </View>
          </View>
          <View style={styles.containerDelivery}>
            <Text style={{ fontWeight: '300', marginRight: 10 }}>23 Min</Text>
            <Text style={{ fontWeight: '400', marginRight: 10 }}>·</Text>
            <Text style={{ fontWeight: '300' }}>Envio Gratis</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View style={{ marginTop: 5 }} />}
      showsVerticalScrollIndicator={false}
      renderItem={() => <ItemProduct />}
    />
  );
};

export default CarouselProduct;

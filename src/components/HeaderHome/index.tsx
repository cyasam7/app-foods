import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Alert, Text, View } from 'react-native';
import { styles } from './style';
import { textPrimarycolor } from '../../utils/contants';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.deliveryText}>Delivery to</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.locationText}>Los Angeles</Text>
          <AntDesign name="caretdown" color={textPrimarycolor} size={8} />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Feather
          onPress={() => Alert.alert('Hola')}
          name="bell"
          size={20}
          color={'#fff'}
        />
        <View style={styles.line} />
        <Feather name="menu" size={20} color={'#fff'} />
      </View>
    </View>
  );
};

export default HeaderHome;

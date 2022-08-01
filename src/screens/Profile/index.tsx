import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Profile = () => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Icon name={'comments'} />
    </SafeAreaView>
  );
};

export default Profile;

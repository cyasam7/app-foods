import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '../screens/Login';
import Products from '../screens/Products';
import Orders from '../screens/Orders';
import Profile from '../screens/Profile';
import { darkPrimarycolor } from '../utils/contants';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <NavigationAuth />
    </NavigationContainer>
  );
};

type StackAuthListParams = {
  login: undefined;
  home: undefined;
};

const StackAuth = createNativeStackNavigator<StackAuthListParams>();

const NavigationAuth: React.FC = () => {
  return (
    <StackAuth.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}>
      <StackAuth.Screen name="login" component={Login} />
      <StackAuth.Screen name="home" component={BottonNavigation} />
    </StackAuth.Navigator>
  );
};

const BottomTab = createMaterialBottomTabNavigator();

function BottonNavigation() {
  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      barStyle={{ backgroundColor: darkPrimarycolor }}>
      <BottomTab.Screen
        name="Feed"
        component={Products}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Ordenes"
        component={Orders}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="file-table-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default Navigation;

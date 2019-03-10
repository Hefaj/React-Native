import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';

import { InfoScreen } from './screens/infoScreen';
import { CytatScreen } from './screens/cytatScreen';
import { AboutScreen } from './screens/aboutScreen';

const AppTabNav = createBottomTabNavigator({
  Info: { screen: InfoScreen },
  Cytat: { screen: CytatScreen },
  About: { screen: AboutScreen },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AppTabNav,
      App: AppTabNav,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

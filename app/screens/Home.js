import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  render() {
    return (
        <Text>
          Olga Khusainova
        </Text>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});
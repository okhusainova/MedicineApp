import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import LoginForm from '../components/LoginForm';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Medication App
        </Text>
  
        <Text style={styles.instructions}>
          created & designed
        </Text>
        <Text style={styles.instructions}>
          Olga Khusainova
        </Text>
         <LoginForm />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#68C3A3',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  instructions: {
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  }
});
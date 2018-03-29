import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import { Button } from 'react-native-elements';

import style from '../components/styles'
import LoginForm from '../components/LoginForm';
import { StackNavigator } from 'react-navigation';

class SignInScreen extends React.Component {
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
          <Button title='Sign In' 
                  buttonStyle={style.button}
                  onPress={() => this.props.navigation.navigate('Details')}  
            />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}


export default StackNavigator(
{
  SignIn: {
    screen: SignInScreen,
  },
  Details: {
      screen: DetailsScreen,
    }
},
  {
    initialRouteName: 'SignIn',
  }
);




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
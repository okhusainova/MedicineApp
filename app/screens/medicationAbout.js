import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  ScrollView,
  Button,
  Image
} from 'react-native';

class AboutMedScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../imgs/pills.png')} style={styles.photo} />
        <Text style={{ fontSize: 30 }}>Sanorin</Text>
        <Text style={{ fontSize: 10 }}>10mg</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  photo: {
    height: 70,
    width: 70,
    borderRadius: 20
  }
});
export default AboutMedScreen;
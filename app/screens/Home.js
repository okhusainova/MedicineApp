import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  ScrollView,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';


class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'My medication',
      headerStyle: {
        backgroundColor: '#68C3A3',
      },
      headerTintColor: '#fff',
      headerLeft: null,
      headerRight: (
        <Button onPress={() => navigation.navigate('createMedication')} title="+" color="#fff" />
      )
    }
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian'
      ])
    };
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.containerOfList}>
        <ListView style={styles.listview}
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          // renderHeader={() => <Header />}
          renderFooter={() => <Footer />}
        />
      </ScrollView>
    );
  }
}

const Row = (props) => (
  <View style={styles.containerOfList}>
    <Image source={require('../imgs/cat.jpeg')} style={styles.photo} />
    <Text style={styles.text}>
      Аскорбиновая кислота
    </Text>
  </View>
);


// const Header = (props) => (
//   <View style={styles.inputContainer}>
//     <TextInput
//       style={styles.input}
//       placeholder="Search..."
//       onChangeText={(text) => console.log('searching for ', text)}
//     />
//   </View>
// );


const Footer = (props) => (
  <View style={styles.containerFooter}>
    <TouchableOpacity style={styles.buttonFooter} onPress={() => console.log('load more')}>
      <Text style={styles.textFooter}>Load More</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#68C3A3'
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
  },

  textOfList: {
    flex: 1,
     marginLeft: 8,
     fontSize: 16,
  },
  containerOfList: {
    marginTop: 12,
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  header: {
    fontSize: 22
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 1,
    fontSize: 15,
    backgroundColor: '#FFFFFF'
  },

inputContainer: {
   flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
},
containerFooter: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFooter: {
    borderColor: '#8E8E8E',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  textFooter: {
    color: '#8E8E8E',
  },
});

export default HomeScreen;
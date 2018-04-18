import { StackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignIn'
import HomeScreen from '../screens/Home'
import createMedicationScreen from '../screens/createMedication'
import AboutMedScreen from '../screens/medicationAbout'

const MainStack = StackNavigator(
{
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
        header: null,
      }
  },
  Home: {
      screen: HomeScreen
    },

  createMedication: {
      screen: createMedicationScreen
    }
},
  {
    // headerMode: "none",
    initialRouteName: "SignIn"
}
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    aboutMedication: {
      screen: AboutMedScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default RootStack;
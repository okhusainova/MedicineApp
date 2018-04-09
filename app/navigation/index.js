import { StackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignIn'
import HomeScreen from '../screens/Home'
import createMedicationScreen from '../screens/createMedication'

const Routes = StackNavigator(
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

  createMedicationScreen: {
      screen: createMedicationScreen
    }  
},
  {
    // headerMode: "none",
    initialRouteName: "SignIn"
}
);

export default Routes;
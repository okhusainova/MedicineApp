import { StackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignIn'
import HomeScreen from '../screens/Home'

const Routes = StackNavigator(
{
  SignIn: {
    screen: SignInScreen,
  },
  Home: {
      screen: HomeScreen,
    }
},
  {
    headerMode: "none",
    initialRouteName: "SignIn"
}
);

export default Routes;
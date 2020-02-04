import {createStackNavigator} from 'react-navigation-stack';
import Loginscreen from '../screen/Loginscreen/Loginscreen.js';
import Homescreen from '../screen/Homescreen/Homescreen';
import Laporscreen from '../screen/Laporscreen/Laporscreen';

export const LoginStack = createStackNavigator(
  {
    Login: {
      screen: Loginscreen,
    },
  },
  {headerMode: 'none', navigationOptions: {tabBarVisible: false}},
);

export const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Homescreen,
    },
    Lapor: {
      screen: Laporscreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {tabBarVisible: false},
  },
);

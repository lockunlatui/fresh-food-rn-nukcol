/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-01-23 15:47:18
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-05 14:19:16
 * @ Description:
 */

import {
  SignIn,
  CreateAccount,
  OnBoarding
} from '../screens'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    OnBoarding: OnBoarding,
    SignIn: SignIn,
    CreateAccount: CreateAccount
  },
  {
    headerMode: false
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
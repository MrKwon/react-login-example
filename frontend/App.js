/*
 * @(#)App.js
 *
 * v 0.0.0
 *
 * 2019.04.16
 *
 * Copyright (c) 2019 KwonMC.
 * CEOS, Seoul, KOREA
 * All right Reserved
 */
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './src/screens/MainScreen'
import SignupScreen from './src/screens/SignupScreen'

/**
 * This is entry point of this application.
 * stackNavigator is composing navigator.
 */
const stackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: 'Main',
      header: null
    }
  },
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: {
      title: 'Signup',
      // header: null
    }
  }
});

export default createAppContainer(stackNavigator);


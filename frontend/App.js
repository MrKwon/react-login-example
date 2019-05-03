// import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './src/screens/MainScreen'
import SignupScreen from './src/screens/SignupScreen'

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
      header: null
    }
  }
});

export default createAppContainer(stackNavigator);


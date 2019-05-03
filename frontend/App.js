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
import MyinfoScreen from './src/screens/MyinfoScreen'

/**
 * This is entry point of this application.
 * stackNavigator is composing navigator.
 */
const stackNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      title: 'Main',
      header: null // 맨 위에 제목 적혀있는 네비게이션 바 없애기
    }
  },
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: {
      title: 'Sign Up',
      // header: null 
    }
  },
  MyinfoScreen: {
    screen: MyinfoScreen,
    navigationOptions: {
      title: 'My Info',
      header: null
    }
  }
});

export default createAppContainer(stackNavigator);


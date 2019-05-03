/*
 * @(#)SignupScreen.js
 *
 * v 0.0.0
 *
 * 2019.04.16
 *
 * Copyright (c) 2019 KwonMC.
 * CEOS, Seoul, KOREA
 * All right Reserved
 */
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

/**
 * This is SignupScreen to register user infomation
 */
export default class SignupScreen extends Component {
  // TODO send request to server
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'}}>
        <Text>Here is SignupScreen</Text>
      </View>
    )
  }
}
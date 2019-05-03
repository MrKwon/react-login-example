import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export default class SignupScreen extends Component {
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
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
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';

/**
 * This is SignupScreen to register user infomation
 */
export default class SignupScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      password: '',
      passwordConfirm: '',
      nickname: ''
    }
  }
  // TODO send request to server
  render() {
    return (
      <View style={styles.container}>
        <TextForm
          placeholder="ID"
          autoCapitalize="none"
          onChangeText={(_event) => {
            this.setState({
              id: _event
            })
          }}
          />
        <TextForm
          placeholder="PASSWORD"
          secureTextEntry={true}
          onChangeText={(_event) => {
            this.setState({
              password: _event
            })
          }}/>
        <TextForm
          placeholder="PASSWORD CHECK"
          secureTextEntry={true}
          onChangeText={(_event) => {
            this.setState({
              passwordConfirm: _event
            })
          }}/>
        <TextForm
          placeholder="NICK"
          onChangeText={(_event) => {
            this.setState({
              nick: _event
            })
          }}/>
        <ButtonForm title="SIGN UP"/>
        <Text>{this.state.id}</Text>
        <Text>{this.state.password}</Text>
        <Text>{this.state.passwordConfirm}</Text>
        <Text>{this.state.nick}</Text>
      </View>
    )
  }
}

const TextForm = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textFieldStyle}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          autoCapitalize={props.autoCapitalize}
          secureTextEntry={props.secureTextEntry}
          />
      </View>
    </View>
  );
}

const ButtonForm = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={{
            backgroundColor: 'black',
            borderRadius: 10,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center'
            }}>
          <Text style={{color: 'white'}}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
/* <View style={{flexDirection: 'row'}}>
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={{
        backgroundColor: 'black',
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
        }}>
      <Text style={{color: 'white'}}>회원가입</Text>
    </TouchableOpacity>
  </View>
</View> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 16
  },
  textInputContainer: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16
  },
  buttonContainer: {
    flex: 1,
    padding: 16 + 8,
  },
  textFieldStyle: {
    height: 40,
    margin: 8,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10
  }
})
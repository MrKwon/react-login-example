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
        <TextForm placeholder="ID"/>
        <TextForm placeholder="PASSWORD"/>
        <TextForm placeholder="PASSWORD CHECK"/>
        <TextForm placeholder="NICK"/>
        <ButtonForm title="SIGN UP"/>
        {/* <View style={{flexDirection: 'row'}}>
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
        </View> */}
      </View>
    )
  }
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

const TextForm = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textFieldStyle}
          placeholder={props.placeholder}
          />
      </View>
    </View>
  );
}


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
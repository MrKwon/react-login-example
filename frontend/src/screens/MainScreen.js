/*
 * @(#)MainScreen.js
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
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  StatusBar,
} from 'react-native';

// import Screens
import SplashScreen from './SplashScreen'

async function getResponseFromApi() {
  try {
    let response = await fetch('http://localhost:8081/status', {
      method: 'GET'
    });
    let responseJson = await response.json();
    return responseJson.message;
  } catch (error) {
    console.log(error)
  }
}

/**
 * This Class is MainScreen of this application.
 */
export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      id: '',
      password: '',
      loginState: false,
      messageChecker: '',
    }
  }
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1000
      )
    )
  }
  goSignupScreen() {
    this.props.navigation.navigate('SignupScreen')
  }
  textInputValidChecker() {
    if (this.state.id === '') {
      alert('아이디를 입력해주세요.')
    } else if (this.state.password === '') {
      alert('비밀번호를 입력해주세요.')
    } else {
      // TODO request to server comfirm id and password and login
    }
  }
  async componentWillMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({ isLoading: false })
    }
    const message = await getResponseFromApi();
    console.log(message)
    if (message !== null) {
      this.setState({
        messageChecker: message
      });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#4f6d7a"/>
        <Text style={styles.titleContainer}>Login Example</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textFieldStyle}
              placeholder="ID"
              autoCapitalize="none"
              onChangeText={(event) => {this.setState({id: event})}}/>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textFieldStyle}
              placeholder="PASSWORD"
              secureTextEntry={true}
              onChangeText={(event) => {this.setState({password: event})}}/>
          </View>
        </View>
        <View>
          <Text>{this.state.messageChecker}</Text>
        </View>
        <ButtonComponent/>
      </View>
    );
  }
}

const ButtonComponent = () => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        style={styles.buttonStyle}
        title="SIGN IN"
        color="#F78181"
        onPress={() => {
          this.textInputValidChecker()
        }}/>
      <Button
        style={styles.buttonStyle}
        title="SIGN UP"
        color="#000000"
        onPress={() => this.goSignupScreen()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f6d7a',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    fontSize: 30,
    padding: 16,
    color: '#ffffff'
  },
  textInputContainer: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16
  },
  buttonContainer: {
    flexDirection: 'row', 
    backgroundColor: '#ffffff',
    margin: 16
  },
  buttonStyle: {
    marginRight: 16,
    marginLeft: 16
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
});

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  StatusBar,
} from 'react-native';

import SplashScreen from './SplashScreen'

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      id: '',
      password: '',
      loginstate: false,
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
  async componentWillMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({ isLoading: false })
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
        <Text style={{fontSize: 25}}>Login Example</Text>
        <View style={{flexDirection: 'column', width: 350}}>
          <TextInput style={styles.textFieldStyle}
            placeholder="ID"
            autoCapitalize="none"
            onChangeText={(event) => {this.setState({id: event})}}/>
          <TextInput style={styles.textFieldStyle}
            placeholder="PASSWORD"
            secureTextEntry={true}
            onChangeText={(event) => {this.setState({password: event})}}/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button title="SIGN IN" color="#F78181" onPress={() => alert('sign in btn clicked')}/>
          <Button title="SIGN UP" color="#FFFFFF" onPress={() => alert('sign up btn clicked')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f6d7a',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    flex: 1
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

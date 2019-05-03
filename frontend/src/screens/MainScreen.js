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

// import Components
import ErrorContainer from '../components/ErrorContainer'

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      id: '',
      password: '',
      loginstate: false,
      error: '',
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
  goSignupScreen() {
    this.props.navigation.navigate('SignupScreen')
  }
  textInputValidChecker() {
    if (this.state.id === '') {
      this.setState({
        error: '아이디를 입력해주세요'
      })
    } else if (this.state.password === '') {
      this.setState({
        error: '비밀번호를 입력해주세요'
      })
    } else {
      this.setState({
        error: ''
      })
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
        <View style={{flexDirection: 'row'}}>
          <ErrorContainer error={this.state.error}/>
        </View>
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

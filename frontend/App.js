import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  StatusBar,
  TouchableOpacity
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      password: '',
      loginstate: '',
    }
  }
  render() {
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
            onKeyPress={(event) => {console.log(event.target)}}/>
          <TextInput style={styles.textFieldStyle}
            placeholder="PASSWORD"
            secureTextEntry={true}/>
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

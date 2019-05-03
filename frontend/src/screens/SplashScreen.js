import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.viewStyles}>
          Splash Screen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4f6d7a'
  },
  viewStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
})
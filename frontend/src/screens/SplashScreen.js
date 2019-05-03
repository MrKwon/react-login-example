/*
 * @(#)SplashScreen.js
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
  StyleSheet
} from 'react-native';

/**
 * app logo screen
 */
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
    backgroundColor: '#4B088A'
  },
  viewStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
})
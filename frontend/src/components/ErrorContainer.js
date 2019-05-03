import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class ErrorContainer extends Component {
  render() {
    if (this.props.error === '') {
      return null
    }
    return (
      <View style={styles.container}>
        <Text>{this.props.error}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5A9BC',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    margin: 16,
    padding: 16
  }
})
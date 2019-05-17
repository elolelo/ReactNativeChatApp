import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class Chat extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is the chat screen</Text>
        <Text style={styles.instructions}>This is a chat app</Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

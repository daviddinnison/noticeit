// react
import React, { Component } from 'react';

// react-native
import { StyleSheet, Text, View, Alert } from 'react-native';

class Launch extends Component {
  componentDidMount() {
    console.log('testing the LAUNCH view!!!!!!!!!!!!!!!!!!!!');
  }

  render() {
    return (
      <View>
        <Text>This is the launch view........</Text>
      </View>
    );
  }
}

export default Launch;

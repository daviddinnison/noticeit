// react
import React, { Component } from 'react';

// react-native
import { StyleSheet, Text, View, Alert } from 'react-native';

// styles
import styles from './styles/main';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textPrimary}>This is the Login view........</Text>
      </View>
    );
  }
}

export default Login;

// react
import React, { Component } from 'react';

// react-native
import { StyleSheet, Text, View } from 'react-native';

// styles
import styles from './styles/main';

class Configure extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textPrimary}>This is the configure view........</Text>
      </View>
    );
  }
}

export default Configure;

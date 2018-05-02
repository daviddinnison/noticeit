// react
import React, { Component } from 'react';

// react-native
import { StyleSheet, Text, View } from 'react-native';

// styles
import styles from './styles/main';

class MainView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textPrimary}>This is the MainView view........</Text>
        <Text style={styles.textSecondary}>This is the MainView view with secondary text........</Text>
      </View>
    );
  }
}

export default MainView;

// react
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <Text style={styles.textPrimary}>{this.props.authTest}</Text>
        <Text style={styles.textPrimary}>{this.props.alarmTest}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    alarmTest: state.alarm.alarmTest,
    authTest: state.auth.authTest
  };
};

export default connect(mapStateToProps)(MainView);

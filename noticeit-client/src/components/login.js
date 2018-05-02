// react
import React, { Component } from 'react';
import { connect } from 'react-redux';

// react-native
import { StyleSheet, Text, View, Alert } from 'react-native';

// actions
import { getAuth } from './../actions/auth';
import { getAlarm } from './../actions/alarm';

// styles
import styles from './styles/main';

class Login extends Component {
  componentDidMount() {
    const someAuthString = 'this is a string that proves the auth action worked';
    const someAlarmString = 'this string proves the alarm worked!!!';
    
    this.props.dispatch(getAuth(someAuthString));
    this.props.dispatch(getAlarm(someAlarmString));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textPrimary}>This is the Login view........</Text>
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

export default connect(mapStateToProps)(Login);

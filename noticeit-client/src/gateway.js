// react
import React, { Component } from 'react';

// react-native
import { StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

//components
import Login from './components/login';
import Configure from './components/configure';
import MainView from './components/mainView';

class Gateway extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="configure" component={Configure} title="Configure" />
          <Scene key="mainView" component={MainView} title="Main" />
          <Scene key="login" component={Login} title="Login" />
        </Stack>
      </Router>
    );
  }
}

export default Gateway;

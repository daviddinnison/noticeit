// react
import React, { Component } from 'react';

// react-native
import { StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

//components
import Launch from './components/launch';
import Configure from './components/configure';


class Gateway extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="launch" component={Launch} title="Launch"  />
          <Scene key="configure" component={Configure} title="Configure" />          
        </Stack>
      </Router>
    );
  }
}

export default Gateway;

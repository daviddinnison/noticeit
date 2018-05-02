// react
import React, { Component } from 'react';

// react native
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import { Provider } from 'react-redux';
import store from './src/store';

// components
import Gateway from './src/gateway';
import Loader from './src/components/common/loader';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'pt-sans-web-regular': require('./assets/fonts/PT_Sans-Web-Regular.ttf'),
      'pt-serif-web-regular': require('./assets/fonts/PT_Serif-Web-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <Provider store={store}>
          <Gateway />
        </Provider>
      );
    } else {
      return <Loader />;
    }
  }
}

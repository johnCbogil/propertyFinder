/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import SearchPage from './SearchPage';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';


class PropertyFinder extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.description}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    flex : 1
  },
});

export default PropertyFinder;

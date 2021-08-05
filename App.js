/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './src/screens/Home';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;

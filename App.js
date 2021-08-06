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
import 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './src/screens/Home';
import RootNavigation from './src/navigation';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <RootNavigation />
      </SafeAreaView>
    </>
  );
};

export default App;

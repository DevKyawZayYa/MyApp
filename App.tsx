/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { AppProvider } from './src/app/providers/app-provider';
import { RootNavigator } from './src/app/navigation/root-navigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        <StatusBar barStyle="dark-content" />
        <RootNavigator />
      </AppProvider>
    </GestureHandlerRootView>
  );
}

export default App;

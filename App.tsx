/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Routes from './src/navigation/Routes';
import store from './src/store';


import ThemeProvider from './src/theme/ThemeProvider';


const App = () => {


  return (
    <ThemeProvider>
      <Provider store={store}>
        <SafeAreaProvider>
          <Routes />
        </SafeAreaProvider>
      </Provider>
    </ThemeProvider>
  );
};


export default App;

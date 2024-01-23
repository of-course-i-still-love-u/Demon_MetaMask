import React from 'react';
import Navigator from './navigator';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs();
  return <Navigator />;
};

export default App;

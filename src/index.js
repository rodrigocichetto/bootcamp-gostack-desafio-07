import React from 'react';
import { StatusBar } from 'react-native';

import colors from './styles/colors';
import './config/ReactotronConfig';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes />
    </>
  );
};

export default App;

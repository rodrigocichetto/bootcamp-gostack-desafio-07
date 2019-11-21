import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import colors from './styles/colors';
import './config/ReactotronConfig';
import Routes from './routes';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes />
    </Provider>
  );
};

export default App;

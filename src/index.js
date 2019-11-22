import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

// import { Container } from './styles/global';

import './config/ReactotronConfig';
import colors from './styles/colors';
import Routes from './routes';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#772ea2" />
      <Routes />
    </Provider>
  );
};

export default App;

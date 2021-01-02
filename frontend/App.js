import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';

// Local imports
import MainNavigator from './app/navigation/MainNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import authReducer from './app/store/auth-reducer';

const store = createStore(authReducer);

const StateHandler = () => {
  const isLogged = useSelector(state => state.isLogged);
  return <NavigationContainer>{isLogged ? <MainNavigator /> : <AuthNavigator />}</NavigationContainer>;
};

const App = () => {
  return (
    <Provider store={store}>
      <StateHandler />
    </Provider>
  );
};

export default App;

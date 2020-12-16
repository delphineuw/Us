import React from 'react';
import { Text, View } from 'react-native';
import AppNavigation from './app/navigation/AppNavigation'

// Local imports
import Example from './app/components/Example/index';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigation />
    </View>
  );
};

export default App;

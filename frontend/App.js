import React from 'react';
import { Text, View } from 'react-native';

// Local imports
import HobbiesScreen from './app/components/HobbiesScreen/index';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <HobbiesScreen />
    </View>
  );
};

export default App;

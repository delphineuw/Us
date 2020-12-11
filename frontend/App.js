import React from 'react';
import { Text, View } from 'react-native';

// Local imports
import Hobbies from './app/components/Hobbies/index';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Hobbies />
    </View>
  );
};

export default App;

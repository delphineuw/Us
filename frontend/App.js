import React from 'react';
import { View } from 'react-native';

// Local imports
import ParticipantsScreen from './app/screens/ParticipantsScreen/index';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ParticipantsScreen />
    </View>
  );
};

export default App;

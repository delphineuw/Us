import React from 'react';
import { View } from 'react-native';
// Local imports
// import AllScreen from './app/screens/EventsScreen/index'
 import AuthNavigation from './app/navigation/AuthNavigation'

const App = () => {
  return <View style={{ flex: 1 }}> 
            <AuthNavigation />
         </View>;
};

export default App;

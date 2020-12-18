import React from 'react';
import { Text, View } from 'react-native';


// Local imports
import Example from './app/components/Example/index';
import FabsComponentTemplate from './app/components/Example/FabsComponentTemplate';
import NavigationScreen from './app/components/Example/NavigationScreen.js';


const onLongPress = () => {
  alert('added new events')
}


const App = () => {
  return (
    <View style={{flex:1}}>
      {/*<NavigationScreen/>*/}
      <Example/>
      <FabsComponentTemplate onLongPress={onLongPress} name={'pencil-circle-outline'} size={60} color={'black'}/>
    </View>
  );
};

export default App;

import React from 'react';
import { Text, View } from 'react-native';




// Local imports
import Example from './app/components/Example/index';
import PencilFabsTemplate from './app/components/Example/PencilFabsTemplate';
import RightCircleTemplate from './app/components/Example/RightCircleTemplate';
import PlusFabsTemplate from './app/components/Example/PlusFabsTemplate';



const onLongPress = () => {
  alert('added new events')
  
}

const App = () => {
  return (
    <View style={{flex:1}}>
    
      <Example/>
      <PencilFabsTemplate onLongPress={onLongPress} name={'pencil-circle-outline'} size={60} color={'black'} />
      <RightCircleTemplate onLongPress={onLongPress} name={'chevron-with-circle-right'} size={55} color={'black'} />
      <PlusFabsTemplate onLongPress={onLongPress} name={'pluscircle'} size={55} color={'black'}/>
     
    </View>
  );
};

export default App;

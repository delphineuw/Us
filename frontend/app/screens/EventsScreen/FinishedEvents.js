import React from 'react';
import { View, Text } from 'react-native';

// Local imports
import styles from './styles'
import eventsTest from  '../../utils/eventsTest.js';
import EventTemplate from '../../components/EventTemplate/Index.js'



const finisehdEvents = props => {
  const maping = () => {
      return eventsTest.map((item)=> (
        <EventTemplate key={item.key} imageUri={item.imageUri} title={item.title} />
      ))};
 return (
   <View  >
       <Text style={styles.text}> Finished events</Text>
       <View style={styles.container}>
             {maping()}
       </View>
   </View>
)}




export default finisehdEvents; 
import React from 'react';
import { View, Text } from 'react-native';

// Local imports
import eventsTest from  '../../utils/eventsTest.js';
import EventTemplate from '../../components/EventTemplate/Index.js'
 import styles from './styles'


const yourEvents = props => {
   const maping = () => {
       return eventsTest.map((item)=> (
         <EventTemplate key={item.key} imageUri={item.imageUri} title={item.title} />
       ))};
  return (
    <View >
        <Text style={styles.text}> Your events </Text>
        <View style={styles.container}
        >
              {maping()}
        </View>
    </View>
)}


export default yourEvents; 
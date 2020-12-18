import React, { useState } from 'react';
import { View, Text } from 'react-native';

// Local imports
import eventsTest from  '../../utils/eventsTest.js';
import EventTemplate from '../../components/EventTemplate/Index.js'
 import styles from './styles'


const eventsScreen = props => {
  const [ isPress, setIsPress ] = React.useState(false);
   const maping = () => {
       return eventsTest.map((item)=> (
         <EventTemplate key={item.key} imageUri={item.imageUri} title={item.title} />
       ))};
  return (
    <View >
    <Text style={styles.text}> Events in brussels </Text>
    <View style={styles.container}>
              {maping()}
        </View>
        <View style={styles.events} >
        </View>
    </View>
)}

export default eventsScreen; 
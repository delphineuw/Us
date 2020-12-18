import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dealsoftheweek from './Dealsoftheweek'
import EventsInBxl from './EventsInBxl'
import YourEvents from './YourEvents'

const allScreen = () => {
   return (
     <View >
        <Dealsoftheweek/>
        <EventsInBxl />
        <YourEvents />
      
     </View>
 )}


 export default allScreen; 
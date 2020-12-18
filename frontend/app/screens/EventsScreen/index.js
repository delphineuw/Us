import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dealsoftheweek from './Dealsoftheweek'
import EventsInBxl from './EventsInBxl'
import YourEvents from './YourEvents'
import FinishedEvents from './FinishedEvents'

const allScreen = () => {
   return (
     <View >
        <Dealsoftheweek/>
        <EventsInBxl />
        <YourEvents />
        <FinishedEvents />
     </View>
 )}


 export default allScreen; 
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Local imports
import eventsTest from  '../../utils/eventsTest.js';
import EventTemplate from '../../components/EventTemplate/Index.js'
// import styles from './styles'


const eventsScreen = props => {
  const [ isPress, setIsPress ] = React.useState(false);
   const maping = () => {
       return eventsTest.map((item)=> (
         <EventTemplate key={item.key} imageUri={item.imageUri} title={item.title} />
       ))};
  return (
    <View style={styles.events} >
    <Text style={styles.text}> Events in brussels </Text>
    <View style={styles.container}>
              {maping()}
        </View>
        <View style={styles.events} >
        </View>
    </View>
)}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap:'wrap',
        margin: 20,
      },
      events: {
      justifyContent: 'center',
    },
    text: {
      marginTop:10,
      textAlign:'center',
      fontSize: 25,
    }
})
export default eventsScreen; 
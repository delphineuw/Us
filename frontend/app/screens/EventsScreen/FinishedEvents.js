import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Local imports



const finisehdEvents = () => {
  return (
    <View style={styles.events} >
        <Text style={styles.text}> Finished Events </Text>
        <View style={styles.container}>
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
  backgroundColor: "#047C7C",
},
text: {
  marginTop:80,
  textAlign:'center',
  fontSize: 25,
}
})
export default finisehdEvents; 
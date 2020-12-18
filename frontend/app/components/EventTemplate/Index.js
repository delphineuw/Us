import React from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native';

// import styles from './styles';

const EventTemplate = ({title, imageUri}) => {

  return (
    <View> 
        <View  >
            <TouchableOpacity>
            <Image
            style={styles.image}
            source={imageUri}
            />
            <Text style={styles.text} > {title} </Text>
            </TouchableOpacity>
        </View>
             
    </View>
  );
};


const styles = StyleSheet.create({
 
  image: {
    width:100,
    height:100,
    borderRadius: 120,
    margin:10, 
  },
  text: {
    textAlign:'center',
    fontSize:15,
  }
})



export default EventTemplate;
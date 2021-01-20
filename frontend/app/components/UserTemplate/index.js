import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import moment from 'moment'


const UserTemplate = ({
  preference,
  image, 
  fullName, 
  id, 
  age,
  country,
  city,
  
}) => {
  

  return (
    <View style={styles.container}>
      <Image
      style={styles.image}
      source={{uri: image}}
    />
      <Text style={styles.text}>
       {fullName}
      </Text>
      <View style={styles.gridUser}>
        <FontAwesome name="birthday-cake" size={24} color="black" />
        <Text style={styles.textcontent}> {moment(age, "YYYYMMDD").fromNow()} </Text>
      </View>
      <View style={styles.gridUser}>
        <Entypo name="location-pin" size={24} color="black" />
        <Text style={styles.textcontent}> {city} </Text>
      </View>
      <View style={styles.gridUser}>
        <Fontisto name="world-o" size={24} color="black" />
        <Text style={styles.textcontent}> {country} </Text>
        <View style={styles.gridUser}>
        </View>
      </View>
      <View style={styles.hobbies} >
      {preference.map(item => {
        return (
          <View style={styles.content}>
          <Image source={{uri: item.image}} style= {{ height: 100, width:100, borderRadius: 100}} />
          <Text style={styles.texthobby}> {item.name} </Text>
          </View>
        )
      })}     
      </View>
    </View>
  );
};



export default UserTemplate;

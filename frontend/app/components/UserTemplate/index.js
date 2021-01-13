import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const UserTemplate = ({
  key, 
  image, 
  fullName, 
  age
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>
       {fullName}
      </Text>
      <View style={styles.gridUser}>
        <FontAwesome name="birthday-cake" size={24} color="black" />
        <Text style={styles.textcontent}> 26 years old </Text>
      </View>
      <View style={styles.gridUser}>
        <Entypo name="location-pin" size={24} color="black" />
        <Text style={styles.textcontent}> Bruxelles </Text>
      </View>
      <View style={styles.gridUser}>
        <Fontisto name="world-o" size={24} color="black" />
        <Text style={styles.textcontent}> Italie </Text>
      </View>
     
    </View>
  );
};

export default UserTemplate;

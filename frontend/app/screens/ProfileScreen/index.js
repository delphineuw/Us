import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import axios from 'axios';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import moment from 'moment';
import FabsComponentTemplate from '../../components/FabsComponentTemplate';

const profileScreen = props => {
  const { fullName, gender, image, birthdate } = useSelector(state => state);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.text}>{fullName}</Text>
      <View style={styles.gridUser}>
        <FontAwesome name="birthday-cake" size={24} color="black" />
        <Text style={styles.textcontent}> ZZZ </Text>
      </View>
      <View style={styles.gridUser}>
        <Entypo name="location-pin" size={24} color="black" />
        <Text style={styles.textcontent}> XXX </Text>
      </View>
      <View style={styles.gridUser}>
        <Fontisto name="world-o" size={24} color="black" />
        <Text style={styles.textcontent}> XXX </Text>
        <View style={styles.gridUser}></View>
      </View>
      {/* <View style={styles.hobbies}>
        {user.preference &&
          user.preference.map(item => {
            return (
              <View style={styles.content}>
                <Image source={{ uri: item.image }} style={{ height: 100, width: 100, borderRadius: 100 }} />
                <Text style={styles.texthobby}> {item.name} </Text>
              </View>
            );
          })}
      </View> */}
      <Button title="hobbies" onPress={() => props.navigation.navigate('EditHobbiesScreen')} />
      <Button title="edit" onPress={() => props.navigation.navigate('EditProfileScreen')} />
    </View>
  );
};
export default profileScreen;

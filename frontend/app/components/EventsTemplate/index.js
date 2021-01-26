import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Local imports
import styles from './styles';
import eventTest from '../../utils/eventTest.js';
import hobbiesTest from '../../utils/hobbiesTest.js';


const EventsTemplate = ({ event }) => {

  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardsWrapper}  onPress={() => navigation.navigate('EventDescriptionScreen', {event} )}>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={event.imageUri}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle} numberOfLines={1}>{event.title}</Text>
            <Text style={styles.cardDetails}>{event.start}{event.date}{' '}{event.time}</Text>
            <Text style={styles.cardDetails} numberOfLines={2}>
              {event.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EventsTemplate;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Local imports
import styles from './styles';
import eventTest from '../../utils/eventTest.js';
import hobbiesTest from '../../utils/hobbiesTest.js';


const EventsTemplate = ({imageUri, title, date, time, description}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardsWrapper}>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={imageUri}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDetails}>{date}{' '}{time}</Text>
            <Text style={styles.cardDetails} numberOfLines={2}>
              {description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EventsTemplate;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Local imports
import styles from './styles';

const HobbieTemplate = ({ hobby, imageUri, selected, onSelect, id }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.textHobbies} onPress={() => onSelect(id)}>
          <Image style={selected === id ? styles.pickedHobbies : styles.imageHobbies} source={imageUri} />
          <Text> {hobby} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HobbieTemplate;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';

// Local imports
import styles from './styles';

const HobbieTemplate = ({title, imageUri}) => {

  return (
    <View style={styles.container}> 

        <View >
            <TouchableOpacity style={styles.textHobbies}>
            <Image
                style={styles.imageHobbies}
                source={imageUri}
            />
            <Text > {title} </Text>
            </TouchableOpacity>
        </View>
             
    </View>
  );
};

export default HobbieTemplate;
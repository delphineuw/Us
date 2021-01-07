import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Local imports
import styles from './styles';

const ButtonFilter = ({ text, handlePress, isSelected }) => {
    const color = isSelected ? styles.buttonFilter : styles.buttonFilterColor;
  return (
    <View style={styles.container}> 
        <TouchableOpacity style={styles.containingViewOfButton} onPress={() => handlePress(text)}>
            <View style={color}>
                <Text style={styles.textBtn}>
                    {text}
                </Text> 
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default ButtonFilter;
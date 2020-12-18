import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Local imports
import styles from './../../ButtonTemplate/styles';

const ButtonEmptyRed = ({ text, handlePress }) => {
  
  return (
    <View style={styles.container}> 
        <TouchableOpacity style={styles.containingViewOfButton} onPress={handlePress}>
            <View style={styles.buttonEmptyRed}>
                <Text style={styles.textRed}>
                    {text}
                </Text> 
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default ButtonEmptyRed;
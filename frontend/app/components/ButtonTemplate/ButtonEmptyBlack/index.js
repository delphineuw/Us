import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Local imports
import styles from './../../ButtonTemplate/styles';

const ButtonEmptyBlack = ({ text, handlePress }) => {
  
  return (
    <View style={styles.container}> 
        <TouchableOpacity style={styles.containingViewOfButton} onPress={handlePress}>
            <View style={styles.buttonEmptyBlack}>
                <Text style={styles.textBlack}>
                    {text}
                </Text> 
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default ButtonEmptyBlack;
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Local imports
import styles from './../../ButtonTemplate/styles';

const ButtonFullRed = ({ text, handlePress }) => {
  
  return (
    <View style={styles.container}> 
        <TouchableOpacity style={styles.containingViewOfButton} onPress={handlePress}>
            <View style={styles.buttonFullRed}>
                <Text style={styles.textWhite}>
                    {text}
                </Text> 
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default ButtonFullRed;
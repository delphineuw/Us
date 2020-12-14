import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Local imports
import styles from './stylesRed';
// import styles from './stylesGreen';

const ButtonTemplate = ({ text, handlePress }) => {
  
  return (
    <View style={styles.container}> 
        <TouchableOpacity style={styles.containingViewOfButton} onPress={handlePress}>
            <View style={styles.buttonSave}>
                <Text style={styles.textSave}>
                    {text}
                </Text> 
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default ButtonTemplate;
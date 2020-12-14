import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Local imports
import styles from './styles';

const ButtonTemplate = ({ text, handlePress }) => {
  
  return (
    <View style={styles.container}> 
        <TouchableOpacity style={styles.containingViewOfButton} onPress={handlePress}>
            <View 
              style={styles.buttonFullRed}
              // style={styles.buttonEmptyRed}
              // style={styles.buttonEmptyBlack}
              // style={styles.buttonFullGreen}
              >

                <Text 
                  style={styles.textWhite}
                  // style={styles.textRed}
                  // style={styles.textBlack}
                  >
                    {text}
                </Text> 
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default ButtonTemplate;
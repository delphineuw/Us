import React from 'react';
import { View, Text, TouchableOpacity, Alert} from 'react-native';

// Local imports
import styles from './styles';

const ButtonTemplate = ({text}) => {
  
  return (
    <View style={styles.container}> 
        <TouchableOpacity style={styles.containingViewOfButton} onPress={() => Alert.alert('Saved!')} >
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
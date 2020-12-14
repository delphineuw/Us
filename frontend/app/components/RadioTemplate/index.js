import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Local Imports
import styles from './styles';

const RadioTemplate = props => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.radioContainer}>
        {props.options.map(option => (
          <TouchableOpacity
            style={styles.radioBox}
            onPress={() => props.onChange(option)}
            key={Math.random()}
          >
            {props.value === option ? (
              <AntDesign name="checkcircle" size={25} color="green" style={{ marginBottom: 5 }} />
            ) : (
              <View style={styles.radioButton} />
            )}
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default RadioTemplate;

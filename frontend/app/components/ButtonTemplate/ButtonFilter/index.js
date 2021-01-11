import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles'
const ButtonFilter = ({ text, handlePress, isSelected }) => {
    const color = isSelected ? styles.buttonSelected : styles.button;
    return (
      <TouchableOpacity onPress={(event) => handlePress(text)} style={color}>
        <Text style={styles.title}>{text}</Text>
      </TouchableOpacity>

    )
}

export default ButtonFilter;
import React from 'react';
import { View, TextInput, Text } from 'react-native';

// Local Imports
import styles from './styles';

const InputTemplate = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => props.onChange(text)}
        value={props.value}
        multiline={props.multiline}
        placeholder={props.placeholder}
        textContentType={props.type}
        secureTextEntry={props.security}
        autoCapitalize={props.autoCapitalize}
      />
    </View>
  );
};

export default InputTemplate;

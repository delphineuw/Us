import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

// Local imports
import InputTemplate from '../InputTemplate/index';
import styles from './styles';

const FormTemplate = props => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.inputs}>
        {props.inputs.map(input => (
          <InputTemplate
            placeholder={input.placeholder}
            label={input.label}
            multiline={input.multiline}
            type={input.type}
            security={input.security}
            autoCapitalize={input.autoCapitalize}
          />
        ))}
      </ScrollView>
      <Button title="Submit" />
    </View>
  );
};

export default FormTemplate;

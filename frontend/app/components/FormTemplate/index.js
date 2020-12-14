import React, { useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

// Local imports
import InputTemplate from '../InputTemplate/index';
import RadioTemplate from '../RadioTemplate/index';
import styles from './styles';

const FormTemplate = props => {
  const [radioValue, setRadioValue] = useState('Other');

  const renderInput = input => {
    switch (input.render) {
      case 'text':
        return (
          <InputTemplate
            placeholder={input.placeholder}
            label={input.label}
            multiline={input.multiline}
            type={input.type}
            security={input.security}
            autoCapitalize={input.autoCapitalize}
            key={input.id}
          />
        );

      case 'radio':
        return (
          <RadioTemplate
            label={input.label}
            key={input.id}
            options={input.options}
            value={radioValue}
            onChange={option => setRadioValue(option)}
          />
        );

      case 'date':
        return null;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.inputs}>{props.inputs.map(input => renderInput(input))}</ScrollView>
      <Button title="Submit" />
    </View>
  );
};

export default FormTemplate;

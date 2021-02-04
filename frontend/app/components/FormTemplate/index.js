import React, { useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

// Local imports
import CustomButton from '../ButtonTemplate/ButtonFullRed/index';
import InputTemplate from '../InputTemplate/index';
import RadioTemplate from '../RadioTemplate/index';
import DatePickerTemplate from '../DatePickerTemplate/index';
import styles from './styles';

const FormTemplate = props => {
  // const changeHobbies = true;
  const navigation = useNavigation();
  const [formValues, setFormValues] = useState([...props.inputs]);

  const changeHandler = (newValue, input) => {
    setFormValues(prev => {
      const updatedInput = { ...input, value: newValue };
      const filteredArray = prev.filter(item => item.id !== input.id);
      const resultArray = [...filteredArray, updatedInput];
      const orderedArray = resultArray.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
      return orderedArray;
    });
  };

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
            value={input.value}
            onChange={text => changeHandler(text, input)}
          />
        );

      case 'radio':
        return (
          <RadioTemplate
            label={input.label}
            key={input.id}
            options={input.options}
            value={input.value}
            onChange={option => changeHandler(option, input)}
            type={input.type}
          />
        );

      case 'date':
        return (
          <DatePickerTemplate
            key={input.id}
            label={input.label}
            value={input.value}
            onChange={date => changeHandler(date, input)}
            type={input.type}
          />
        );

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.inputs}>{formValues.map(input => renderInput(input))}</ScrollView>
      <View style={{ marginTop: 30 }}>
        {props.changeHobbies ? (
          <Button title="Modify your hobbies" onPress={() => navigation.navigate('EditHobbiesScreen')} />
        ) : null}

        <CustomButton text="Submit" handlePress={() => props.onSubmit(formValues)} />
      </View>
    </View>
  );
};

export default FormTemplate;

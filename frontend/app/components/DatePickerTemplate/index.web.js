import React, { useState } from 'react';
import { View, Button, Platform, Text } from 'react-native';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker'

// Local Imports
import styles from './styles';

const DatePickerTemplate = props => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const today = new Date();
    const currentDate = selectedDate || today;
    setShow(Platform.OS === 'ios');
    props.onChange(currentDate);
  };

  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      {show ? (
        <DatePicker
          selected={props.value}
          {...props.mode==='datetime' &&  {showTimeSelect:true}}
          onChange={onChange}
        />
      ) : (
        <Button onPress={() => setShow(true)} title="Pick a date!" />
      )}
    </View>
  );
};

export default DatePickerTemplate;

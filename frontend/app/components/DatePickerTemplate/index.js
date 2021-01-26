import React, { useState } from 'react';
import { View, Button, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

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
        <DateTimePicker
          testID="dateTimePicker"
          value={props.value}
          type={props.type}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      ) : (
        <Button onPress={() => setShow(true)} title="Pick a date!" />
      )}
    </View>
  );
};

export default DatePickerTemplate;

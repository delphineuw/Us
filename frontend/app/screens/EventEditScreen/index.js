import React from 'react';
import { View, Text, Button, Image } from 'react-native';

// Local Imports
import PLACEHOLDER from '../../assets/placeholder.png';
import Form from '../../components/FormTemplate/index';
import styles from './styles';

const editForm = [
  {
    id: 1,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Title',
    multiline: false,
    type: 'name',
    security: false,
    autoCapitalize: 'none',
    value: ''
  },
  {
    id: 2,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Description',
    multiline: true,
    type: 'none',
    security: false,
    autoCapitalize: 'none',
    value: ''
  },
  {
    id: 3,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Address',
    multiline: true,
    type: 'fullStreetAddress',
    security: false,
    autoCapitalize: 'none',
    value: ''
  },
  {
    id: 4,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Start Date',
    multiline: false,
    type: 'none',
    security: false,
    autoCapitalize: 'none',
    value: ''
  },
  {
    id: 5,
    render: 'text',
    placeholder: 'Write here...',
    label: 'End Date',
    multiline: false,
    type: 'none',
    security: false,
    autoCapitalize: 'none',
    value: ''
  }
];

const EventEditScreen = props => {
  const { hobby } = props.route.params;

  const submitEvent = data => {
    const output = [{ hobby: hobby.hobby, image: hobby.imageUri }];
    for (const key in data) {
      output.push({ field: data[key].label, value: data[key].value });
    }
    console.log(output);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={hobby.imageUri || PLACEHOLDER} />
          <Text>{hobby.hobby}</Text>
        </View>
        <Form inputs={editForm} onSubmit={submitEvent} />
      </View>
    </View>
  );
};

export default EventEditScreen;

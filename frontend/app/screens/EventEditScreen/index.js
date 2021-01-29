import React from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';

// Local Imports
import PLACEHOLDER from '../../assets/placeholder.png';
import Form from '../../components/FormTemplate/index';
import ipAdd from '../../utils/ipAdd.js';
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
    label: 'Date',
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
    label: 'Time',
    multiline: false,
    type: 'none',
    security: false,
    autoCapitalize: 'none',
    value: ''
  }
];

const EventEditScreen = props => {
  const { categories } = props.route.params;

  const submitEvent = data => {

    const output = [{ category: categories.category, image: categories.imageUri }];
    for (const key in data) {
      output.push({ field: data[key].label, value: data[key].value });
    }

    const title = output.filter(item => item.field === 'Title')[0].value
    // console.log(title);
    const category = output.filter(item => item.category)[0].category
    // console.log(category);
    const description = output.filter(item => item.field === 'Description')[0].value
    // console.log(description);
    const location = output.filter(item => item.field === 'Address')[0].value
    // console.log(location);
    const date = output.filter(item => item.field === 'Date')[0].value
    // console.log(date);
    const time = output.filter(item => item.field === 'Time')[0].value
    // console.log(time);

    axios.post(`http://${ipAdd}:4000/api/events`, {title, category, description, location, date, time})
      .then((response) => {
      console.log('posted')
      props.navigation.navigate('EventScreen')
      })
      .catch((error) => {
      console.log('error');
      });  
      
  };


  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={categories.imageUri || PLACEHOLDER} />
          <Text>{categories.category}</Text>
        </View>
        <Form inputs={editForm} onSubmit={submitEvent} />
      </View>
    </View>
  );
};

export default EventEditScreen;

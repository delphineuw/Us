import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { View, Image } from 'react-native';

// Local imports
import logo from '../../assets/logo.png';
import Form from '../../components/FormTemplate/index';
import styles from './styles';

// call api POST
const signupForm = [
  {
    id: 1,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Full Name',
    multiline: false,
    type: 'fullName',
    security: false,
    autoCapitalize: 'none',
    value: '',
  },
  {
    id: 2,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Email',
    multiline: false,
    type: 'email',
    security: false,
    autoCapitalize: 'none',
    value: ''
  },
  {
    id: 3,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Password',
    multiline: false,
    type: 'password',
    security: true,
    autoCapitalize: 'none',
    value: ''
  },
  {
    id: 4,
    render: 'radio',
    label: 'Gender',
    options: ['Male', 'Female', 'Other'],
    value: 'Other',
    type: 'gender'
  },
  {
    id: 5,
    render: 'date',
    label: 'Date of birth',
    value: new Date(),
    type: 'birthday'
  }
];
const submitUser = (data) => {
   console.log('I am in submitUser')
   let body = {}
   data.forEach(element => {
     body[element.type] = element.value
    });
    console.log(body)
    console.log("i am in submit ")
    axios.post('http://localhost:4000/api/users/signup/', body)
      .then((res) => {
          console.log(res.data)
        }).catch((err) => {
          console.log(err)
        })
  }

const SignupScreen = props => {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Form inputs={signupForm} onSubmit={submitUser} />
    </View>
  );
};
export default SignupScreen;



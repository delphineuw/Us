import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { useDispatch } from 'react-redux';

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
    type: 'none',
    security: false,
    autoCapitalize: 'none',
    value: '',
    field: 'fullName'
  },
  {
    id: 2,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Email',
    multiline: false,
    type: 'emailAddress',
    security: false,
    autoCapitalize: 'none',
    value: '',
    field: 'email'
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
    value: '',
    field: 'password'
  }
  // {
  //   id: 4,
  //   render: 'radio',
  //   label: 'Gender',
  //   options: ['Male', 'Female', 'Other'],
  //   value: 'Other',
  //   type: 'gender'
  // },
  // {
  //   id: 5,
  //   render: 'date',
  //   label: 'Date of birth',
  //   value: new Date(),
  //   type: 'birthday'
  // }
];

const SignupScreen = props => {
  const dispatch = useDispatch();
  const submitUser = async data => {
    const email = data.filter(item => item.field === 'email')[0].value;
    const password = data.filter(item => item.field === 'password')[0].value;
    const fullName = data.filter(item => item.field === 'fullName')[0].value;

    let response;
    try {
      response = await axios.post('http://localhost:4000/api/users/signup/', { email, password, fullName });
    } catch (error) {
      console.log(error);
    }
    if (response) {
      dispatch({ type: 'LOGIN', payload: { fullName: response.data.user.fullName, image: response.data.user.image } });
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Form inputs={signupForm} onSubmit={submitUser} />
    </View>
  );
};
export default SignupScreen;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { useDispatch } from 'react-redux';

// Local imports
import logo from '../../assets/logo.png';
import Form from '../../components/FormTemplate/index';
import API from '../../utils/ipAdd';
import styles from './styles';

// call api POST
const signupForm = [
  {
    id: 1,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Full Name',
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
    label: 'Email',
    multiline: false,
    type: 'emailAddress',
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
    type: 'none'
  }
];

const SignupScreen = props => {
  const dispatch = useDispatch();

  const submitUser = async data => {
    const fullName = data.filter(item => item.label === 'Full Name')[0].value;
    const email = data.filter(item => item.label === 'Email')[0].value;
    const password = data.filter(item => item.label === 'Password')[0].value;
    const gender = data.filter(item => item.label === 'Gender')[0].value;
    const birthdate = data.filter(item => item.label === 'Date of birth')[0].value;

    let response;
    try {
      response = await axios.post(API + '/api/users/signup', { fullName, email, password, gender, birthdate });
    } catch (error) {
      console.log('An error occured: ', error);
    }

    if (!response) return;
    if (response.data.access) {
      console.log('Access granted!');
      dispatch({
        type: 'LOGIN',
        payload: {
          fullname: response.data.user.fullName,
          gender: response.data.user.gender,
          image: response.data.user.image,
          id: response.data.user.id
        }
      });
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

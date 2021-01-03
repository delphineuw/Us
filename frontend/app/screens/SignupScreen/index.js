import React from 'react';
import { View, Image } from 'react-native';

// Local imports
import logo from '../../assets/logo.png';
import Form from '../../components/FormTemplate/index';
import styles from './styles';

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
    value: 'Other'
  },
  {
    id: 5,
    render: 'date',
    label: 'Date of birth',
    value: new Date()
  }
];

const SignupScreen = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Form inputs={signupForm} onSubmit={val => console.log(val)} />
    </View>
  );
};

export default SignupScreen;

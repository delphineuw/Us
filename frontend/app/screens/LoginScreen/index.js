import React from 'react';
import { View, Text, Image } from 'react-native';

// Local imports
import logo from '../../assets/logo.png';
import Form from '../../components/FormTemplate/index';
import styles from './styles';

const loginForm = [
  {
    id: 1,
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
    id: 2,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Password',
    multiline: false,
    type: 'password',
    security: true,
    autoCapitalize: 'none',
    value: ''
  }
];

const LoginScreen = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Form inputs={loginForm} submitHandler={() => {}} />
    </View>
  );
};

export default LoginScreen;

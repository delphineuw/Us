import React from 'react';
import { View, Image } from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';

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
    value: '',
    field: 'email'
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
    value: '',
    field: 'password'
  }
];

const LoginScreen = props => {
  const dispatch = useDispatch();

  const submitUser = async data => {
    const email = data.filter(item => item.field === 'email')[0].value;
    const password = data.filter(item => item.field === 'password')[0].value;

    let response;
    try {
      response = await axios.post('http://localhost:4000/api/users/login/', { email, password });
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
      <Form inputs={loginForm} onSubmit={submitUser} />
    </View>
  );
};

export default LoginScreen;

import React from 'react';
import { View, Image } from 'react-native';
import axios from 'axios';


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
const login = (data) => {
  let body = {}
  data.forEach(element => {
    body[element.type] = element.value
  });
  console.log(body)
  axios.post('http://localhost:4000/api/users/login', body)
    .then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
}

const LoginScreen = props => {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Form inputs={loginForm} onSubmit={login} />
    </View>
  );
};

export default LoginScreen;

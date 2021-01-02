import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

// Local imports
import styles from './styles';

const WelcomeScreen = props => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Button title="Login" onPress={() => props.navigation.navigate('LoginScreen')} />
      <Button title="Signup" onPress={() => props.navigation.navigate('SignupScreen')} />
      <Button title="Guest" onPress={() => dispatch({ type: 'LOGIN' })} />
    </View>
  );
};

export default WelcomeScreen;

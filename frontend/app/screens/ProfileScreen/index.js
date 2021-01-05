import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

const ProfileScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="Edit" onPress={() => props.navigation.navigate('EditProfileScreen')} />
    </View>
  );
};

export default ProfileScreen;

import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

const EditProfileScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Edit Profile</Text>
      <Button title="Hobbies" onPress={() => props.navigation.navigate('EditHobbiesScreen')} />
    </View>
  );
};

export default EditProfileScreen;

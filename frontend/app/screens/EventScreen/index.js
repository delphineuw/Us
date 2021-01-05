import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

const EventScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Events</Text>
      <Button title="EDIT" onPress={() => props.navigation.navigate('EventEditScreen')} />
      <Button title="Description" onPress={() => props.navigation.navigate('EventDescriptionScreen')} />
    </View>
  );
};

export default EventScreen;

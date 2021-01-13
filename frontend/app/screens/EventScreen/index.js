import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// local import
import styles from './styles';
import EventsTemplate from '../../components/EventsTemplate/index.js';
import eventTest from '../../utils/eventTest.js';
import hobbiesTest from '../../utils/hobbiesTest.js';
import FabsTemplate from '../../components/FabsTemplate/index.js';

const EventScreen = props => {
  const maping = () => {
    return eventTest.map(item => (
      <EventsTemplate
        key={item.key}
        imageUri={item.imageUri}
        title={item.title}
        time={item.time}
        description={item.description}
      />
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
        <Image style={styles.imgLogo} source={require('../../assets/logo.png')} />
        {/* <Text>Events</Text> */}
        {/* <EventsTemplate /> */}
      </View>

      {maping()}

      <Button title="EDIT" onPress={() => props.navigation.navigate('EventEditScreen')} />
      <Button title="Description" onPress={() => props.navigation.navigate('EventDescriptionScreen')} />
      <Button title="Participant" onPress={() => props.navigation.navigate('ParticipantScreen')} />
    </ScrollView>
  );
};

export default EventScreen;

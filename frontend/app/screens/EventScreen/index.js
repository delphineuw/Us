import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// local import
import styles from './styles';
// import FabsComponentTemplate from '../../components/FabsComponentTemplate';
import EventsTemplate from '../../components/EventsTemplate/index.js';
import eventTest from '../../utils/eventTest.js';
// import hobbiesTest from '../../utils/hobbiesTest.js';


const EventScreen = props => {

  const maping = () => {
    return eventTest.map(event => 
              <EventsTemplate key={event.key} event={event} />
    );
  };

  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <View style={styles.head}>
        {/* <Text style={styles.textHead} >
           Deals of the week
        </Text> */}
        <Image style={styles.imgHead} source={require('../../assets/friends.jpeg')}/>
        <Image style={styles.imgLogo} source={require('../../assets/logo.png')}/>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {/* <View style={styles.event}>
          {maping()}
        </View> */}
       </ScrollView>
        
      </View>
        <Text style={styles.textHead} >
           Deals of the week
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
         <View style={styles.event}>
          {maping()}
        </View>
        </ScrollView>

      <Text style={styles.text} >
          Events Today
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.event}>
          {maping()}
        </View>
       </ScrollView>

       <Text style={styles.text} >
          All events
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.event}>
          {maping()}
        </View>
       </ScrollView>

      <Text style={styles.text} >
          Your events
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.event}>
          {maping()}
        </View>
       </ScrollView>
      
       {/* <FabsComponentTemplate /> */}
   

      <Button title="EDIT" onPress={() => props.navigation.navigate('EventEditScreen')} />
      {/* <Button title="Description" onPress={() => props.navigation.navigate('EventDescriptionScreen' )} /> */}
      <Button title="Participant" onPress={() => props.navigation.navigate('ParticipantScreen')} />
    </ScrollView>
  );
};

export default EventScreen;

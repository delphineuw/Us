import React from 'react';
import { View, Text, ScrollView } from 'react-native';

// Local imports
import styles from './styles';
import ParticipantTemplate from '../../components/ParticipantTemplate';
import participantsTest from '../../utils/participantsTest.js';


const ParticipantsScreen = props => {

  const isCreator = true;


  const maping = () => {
    return participantsTest.map((item) => (
        <ParticipantTemplate 
            key={item.key} 
            imageUri={item.imageUri} 
            firstName={item.firstName} 
            lastName={item.lastName} 
            isCreator={isCreator} />
   ))};

  return (
    <View > 

      <View style={styles.head}>
        <Text style={styles.text}>
            Participants
        </Text>
        {isCreator ?  <Text style={styles.note} note>
          Choose who particpate to your event
        </Text> : <Text></Text>}
       
      </View>

      <ScrollView>
        <View>
          {maping()}
        </View>
      </ScrollView>

    </View>
  );
};

export default ParticipantsScreen;
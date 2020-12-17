import React from 'react';
import { View, Text, Alert } from 'react-native';
import EventsTest from '../../utils/EventsTest';


const eventsScreen = props => {

    const handlePress = () => {
        Alert.alert('Saved!')
    };

    const maping = () => {
        return eventsTest.map((item) => (
            <HobbieTemplate key={item.key} imageUri={item.imageUri} title={item.title} />
       ))};
    
  return (
    <View style={styles.container}> 

        <Text style={styles.head}>
            Pick your hobbies
        </Text>

        <View style={styles.gridHobbies}>
           {maping()}
        </View>

        <ButtonFullRed text={'save'} handlePress={handlePress} />

    </View>
  );
};

export default eventsScreen;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Local imports
import EventScreen from '../screens/EventScreen/index';
import EventEditScreen from '../screens/EventEditScreen/index';
import EventDescriptionScreen from '../screens/EventDescriptionScreen/index';
import ParticipantScreen from '../screens/ParticipantsScreen/index';
import HobbiesScreen from '../screens/FormHobbiesScreen';
import SearchScreen from '../screens/SearchScreen';

// Scan Navigation (Stack)
const Stack = createStackNavigator();
const SearchNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="SearchScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="EventDescriptionScreen" component={EventDescriptionScreen} />
        <Stack.Screen name="ParticipantScreen" component={ParticipantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SearchNavigator;

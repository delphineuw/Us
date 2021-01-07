import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Local imports
import ProfileScreen from '../screens/ProfileScreen/index';
import EditProfileScreen from '../screens/EditProfileScreen/index';
import EditHobbiesScreen from '../screens/EditHobbiesScreen/index';

// Scan Navigation (Stack)
const Stack = createStackNavigator();
const ProfileNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="ProfileScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="EditHobbiesScreen" component={EditHobbiesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProfileNavigator;

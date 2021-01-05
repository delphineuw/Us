import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

// Local imports
import ProfileNavigator from './ProfileNavigator';
import EventScreen from '../screens/EventScreen/index';
import SearchScreen from '../screens/SearchScreen/index';

// Main navigation (Bottom Tab)
const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Profile" tabBarOptions={tabOptions}>
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ size, color }) => <FontAwesome name="user" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="Event"
        component={EventScreen}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="calendar" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ size, color }) => <AntDesign name="search1" size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  );
};

// Main navigation options
const tabOptions = {
  activeBackgroundColor: '#F25C75',
  inactiveBackgroundColor: '#F25C75',
  activeTintColor: '#FFF',
  inactiveTintColor: '#000',
  showLabel: false
};

export default MainNavigator;

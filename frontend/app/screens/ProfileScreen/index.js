import React, { useState} from 'react';
import { View, ScrollView, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 


import UserTemplate from '../../components/UserTemplate/index'
import userExample from '../../utils/UserExample'
import hobbiesTest from '../../utils/hobbiesTest'

import styles from './styles';

const ProfileScreen = props => {
    
        <UserTemplate 
            
            />

  return (
    <View>
      <UserTemplate
      key={userExample.key} 
            imageUri={userExample.imageUri} 
            firstName={userExample.firstName} 
            lastName={userExample.lastName} 
            age={userExample.age} 
            country= {userExample.country} 
            city= {userExample.city} 
            location= {userExample.location} 
            hobby1 = {userExample.hobbies[0].name}
            imageHobby1 = {userExample.hobbies[0].image}
            hobby2 = {userExample.hobbies[1].name}
            imageHobby2 = {userExample.hobbies[1].image}
            hobby3 = {userExample.hobbies[2].name}
            imageHobby3 = {userExample.hobbies[2].image}  
      />
    </View>

     
  );
};

export default ProfileScreen;

import React from 'react';
import { Button, TouchableOpacity, Text, Item, TextInput, Label, Image } from 'react-native';
import { View } from 'react-native';

import styles from './styles';
import splashImg from '../../assets/splash.png'

const EditProfileTemplate = () =>{
    return (
      <>
      <View style={styles.regForm}>
        <Image  style={{height: 150, width:150, marginLeft:60}}
        source={splashImg}/>
         
        <View style={{ flexDirection: 'row', justifyContent:'space-around'}} >
          <TextInput style={styles.textinput}
          placeholder='FirstName' underlineColorAndroid={'transparent'} />
          <TextInput style={styles.textinput}
          placeholder='LastName' underlineColorAndroid={'transparent'} />
        </View>
          <TextInput style={styles.textinput}
          placeholder='Email' underlineColorAndroid={'transparent'} />
          <TextInput style={styles.textinput}
          placeholder='Password' underlineColorAndroid={'transparent'} />

          <TouchableOpacity style={styles.regBtnSave} onPress={()=> alert('i am seved')}>
            <Text style={styles.btnText}>SAVE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.regBtnHobbies} onPress={()=> alert('Add my hobbies')}>
            <Text style={styles.btnText}>HOBBIES</Text>
            
          </TouchableOpacity>
      </View>
       
      </>
    )};

export default EditProfileTemplate;
import React, { useState, useEffect} from 'react'
import {View, Text, Button} from 'react-native'
import axios from 'axios'
import UserTemplate from '../../components/UserTemplate/index'
import FabsComponentTemplate from '../../components/FabsComponentTemplate'



const profileScreen = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
-         axios.get('http://localhost:4000/api/users/')
            .then((res) => { 
                setUser(res.data);
            }).catch((err) => {
                console.log(err);
            })         
        }, []);

     
        const maping = () => {
            return user.map(item => (
              <UserTemplate
                id = {item.id}
                image = {item.image}
                fullName = {item.fullName}
                age = {item.birthday}
                country = {item.country}
                city = {item.city}
                preference = {item.preference}
            />
            ));
          };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FabsComponentTemplate />

        {maping()}
        <Button title="hobbies" onPress={() => props.navigation.navigate('EditHobbiesScreen')} />
        <Button title="edit" onPress={() => props.navigation.navigate('EditProfileScreen')} />
        </View>
    )
}
export default profileScreen







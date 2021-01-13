import React, { useState, useEffect} from 'react'
import {View, Text, Button} from 'react-native'
import axios from 'axios'
import UserTemplate from '../../components/UserTemplate/index'


const profileScreen = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const {id} = this.props.match.params
         axios.get(`http://localhost:4000/api/users/${id}`)
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
              />
            ));
          };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {maping()}

        <Button title="hobbies" onPress={() => props.navigation.navigate('EditHobbiesScreen')} />
            <Button title="edit" onPress={() => props.navigation.navigate('EditProfileScreen')} />
        </View>
    )
}
export default profileScreen







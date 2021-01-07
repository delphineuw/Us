import React from 'react'
import { View, Text, Image} from 'react-native'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const UserTemplate =({ key, imageUri, firstName, lastName, age, country, city, location, hobby1, hobby2, hobby3, imageHobby1, imageHobby2, imageHobby3})=> {
    return (
        <View style={styles.container}>
            <Image source={imageUri} style= {styles.image} />
             <Text style={styles.text}> {firstName} {lastName} </Text>
                <View style={styles.gridUser}>
                    <FontAwesome name="birthday-cake" size={24} color="black" />
                    <Text style={styles.textcontent}> {age} years old </Text>
                </View>
                <View style={styles.gridUser}>
                    <Entypo name="location-pin" size={24} color="black" />
                    <Text style={styles.textcontent}> {country}, {city}</Text>
                </View>
                <View style={styles.gridUser}>
                    <Fontisto name="world-o" size={24} color="black" />
                    <Text style={styles.textcontent}> {location} </Text>
                </View>
                <View style={styles.hobbies}>
                    <View style={styles.gridHobby}>
                        <Image source={imageHobby1} style={{height: 100, width: 100, borderRadius: 100}} />
                        <Text style={styles.texthobby}> {hobby1} </Text>
                    </View>
                    <View style={styles.gridHobby}>
                        <Image source={imageHobby2} style={{height: 100, width: 100, borderRadius: 100}} />
                        <Text style={styles.texthobby}> {hobby2} </Text>
                    </View>
                    <View style={styles.gridHobby}>
                        <Image source={imageHobby3} style={{height: 100, width: 100, borderRadius: 100}} />
                        <Text style={styles.texthobby}>  {hobby}</Text>
                    </View>
                </View> 
        </View>
    )
}

export default UserTemplate
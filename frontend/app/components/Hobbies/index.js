import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image} from 'react-native';

// Local imports
import styles from './styles';

const Hobbies = props => {
    const [ isPress, setIsPress ] = React.useState(false);
  

  return (
    <View style={styles.container}> 

        <Text style={styles.head}>
            Pick your hobbies
        </Text>

        <View style={styles.gridHobbies}>
            <TouchableOpacity style={styles.textHobbies}>
            <Image
                style={styles.imageHobbies}
                source={{uri:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}}
            />
            <Text > Gym </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.textHobbies}>
            <Image 
                style={styles.imageHobbies}
                source={{uri:'https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80'}}
            />
            <Text style={styles.textHobbies}> Cooking </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textHobbies}> 
            <Image 
                style={styles.imageHobbies}
                source={{uri:'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1323&q=80'}}
            />
            <Text style={styles.textHobbies}> Travel </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textHobbies}>
            <Image 
                style={styles.imageHobbies}
                source={{uri:'https://images.unsplash.com/photo-1539639885136-56332d18071d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}}
            />
            <Text style={styles.textHobbies}> Bar </Text>
            </TouchableOpacity >

            <TouchableOpacity style={styles.textHobbies}>
            <Image 
                style={styles.imageHobbies}
                source={{uri:'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'}}
            />
            <Text style={styles.textHobbies}> Art </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textHobbies}>
            <Image 
                style={styles.imageHobbies}
                source={{uri:'https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}}
            />
            <Text style={styles.textHobbies}> Car </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textHobbies}>
            <Image 
                style={styles.imageHobbies}
                source={{uri:'https://images.unsplash.com/photo-1574267432644-f410f8ec2474?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80'}}
            />
            <Text style={styles.textHobbies}> Cinema </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textHobbies}>
            <Image 
                style={styles.imageHobbies}
                source={{uri:'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}}
            />
            <Text style={styles.textHobbies}> Party </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textHobbies}>
            <Image 
                style={styles.imageHobbies}
                source={{uri:'https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'}}
            />
            <Text style={styles.textHobbies}> Game </Text>
            </TouchableOpacity>
        </View>
        


        <TouchableOpacity style={styles.containingViewOfButton} onPress={() => Alert.alert('Saved!')} >
            <View style={styles.buttonSave}>
                <Text style={styles.textSave}>
                    Save
                </Text> 
            </View>
        </TouchableOpacity>

    </View>
  );
};

export default Hobbies;
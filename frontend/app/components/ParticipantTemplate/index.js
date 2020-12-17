import React from 'react';
import { View, TouchableOpacity, Image} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { CheckBox, Right, Text } from 'native-base';

// Local imports
import styles from './styles';

const HobbieTemplate = ({firstName, lastName, imageUri, isCreator}) => {

  const [ isPress, setIsPress ] = React.useState(false);
  
  return (
    <View> 
            <TouchableOpacity style={styles.participant}>
                <View style={styles.alignParticipant}>
                    <Image style={styles.imageParticipant} source={imageUri}/>
                    <Text style={styles.textParticipant}> {firstName}{' '}{lastName} </Text> 
                    <Right>
                        <View style={styles.iconparticipant}>
                          {isCreator? <CheckBox 
                                          style={styles.checkBoxParticipant} 
                                          onPress={() => setIsPress (prevstate => !prevstate)} 
                                          checked={isPress ? true : false} 
                                          color="green"
                                          /> : null}

                          <AntDesign name="right" size={30} color="black" />
                        </View>
                    </Right>
                </View>
            </TouchableOpacity>
    </View>
  );
};

export default HobbieTemplate;
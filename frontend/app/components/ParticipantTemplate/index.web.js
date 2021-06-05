import React from 'react';
import { View, TouchableOpacity, Image, Text} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

// import { CheckBox, Right, Text } from 'native-base';
import { CheckBox } from 'react-native-web';
const Right = () => <View style={{flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-end'}} />;

// Local imports
import styles from './styles';

const HobbieTemplate = ({firstName, lastName, imageUri, isCreator}) => {

  const [ isPress, setIsPress ] = React.useState(false);

  return (
    <View>
            <View style={styles.participant}>
                <View style={styles.alignParticipant}>
                    <Image style={styles.imageParticipant} source={imageUri}/>
                    <Text style={styles.textParticipant}> {firstName}{' '}{lastName} </Text>
                    <Right>
                        <View style={styles.iconparticipant}>
                          {isCreator? <CheckBox
                                          style={styles.checkBoxParticipant}
                                          onChange={() => setIsPress(prevstate => !prevstate)}
                                          value={isPress}
                                          color="green"
                                          /> : null}
                          <TouchableOpacity>
                            <AntDesign name="right" size={30} color="black" />
                          </TouchableOpacity>
                        </View>
                    </Right>
                </View>
            </View>
    </View>
  );
};

export default HobbieTemplate;

import React from 'react';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';

 const RightCircleTemplate = ({onLongPress, color, name, size}) => {
   return ( 
   <Entypo style={styles.rightCircle}
   onPress={onLongPress}
   name={name} 
   size={size} 
   color={color} />
 )};

export default RightCircleTemplate;
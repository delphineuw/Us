import React from 'react';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

 const PencilFabsTemplate = ({onLongPress, color, height, name, size}) => {
   return ( 
   <MaterialCommunityIcons style={styles.pencilCircle} 
   onPress={onLongPress}
   name={name} 
   size={size} 
   color={color}
   height={height} />
 )};


export default PencilFabsTemplate;
              
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import styles from './styles';
 const PlusFabsTemplate = ({onLongPress, color, height, name, size}) => {
   return ( 
   <AntDesign style={styles.plusCircle} 
   onPress={onLongPress}
   name={name} 
   size={size} 
   color={color}
   height={height} />
 )};


export default PlusFabsTemplate;
              
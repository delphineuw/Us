import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//FABS  import and NAME
//import { AntDesign } from '@expo/vector-icons'; for Fabs name="plus"
// For fabs ">" use name= 'chevron-right-circle-outline'
// for Pencils use name ='pencil-circle' outline'

const FabsComponentTemplate = ({onLongPress, color, height, name, size}) => {
  if ( name=='plus'){
    return(
      <AntDesign style={{position: 'absolute',margin: 30,
        bottom: 0,
        borderRadius:50,
        }} 
        onPress={onLongPress}
        name={name} 
        size={size} 
        color={color}
        height={height} 
      />
      )
  }else{
    return ( 
      <MaterialCommunityIcons style={{position: 'absolute',margin: 30,
        bottom: 0,
        borderRadius:50,
        }} 
        onPress={onLongPress}
        name={name} 
        size={size} 
        color={color}
        height={height} 
      />
    )
  } 
};

export default FabsComponentTemplate;
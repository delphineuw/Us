import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import styles from './styles'
import { View } from 'native-base';

//FABS  import and NAME
//for PlusFabs use name="pluscircleo"
// for PencilsFabs use name ='pencil-circle-outline'

const FabsTemplate = ({onLongPress, color, height, name, size}) => {
  
  if ( name==='pencil-circle-outline'){
    return(
      <MaterialCommunityIcons style={styles.fabsPencil} 
        onPress={onLongPress}
        name={name}  
        color={color}
      />
      )
  }else{
    return ( 
      // name="pluscircleo"
      <AntDesign style={styles.fabsPlus} 
        onPress={onLongPress}
        name={name}  
        color={color}
      />
    )
      }
    }


export default FabsTemplate;
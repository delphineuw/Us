import React, {useState} from 'react';
import { View, Image, Text, TextInput } from 'react-native';

// Local imports
import logo from '../../assets/logo.png';
import styles from './styles';
//import ButtonEmptyBlack from '../../components/ButtonTemplate/ButtonEmptyBlack/index';
import ButtonFilterBig from '../../components/ButtonTemplate/ButtonFilterBig/index';
import ButtonFilterSmall from '../../components/ButtonTemplate/ButtonFilterSmall';
import ButtonFilterMedium from '../../components/ButtonTemplate/ButtonFilterMedium/index';
import ButtonFilter from '../../components/ButtonTemplate/ButtonFilter';

const FiltersScreen = props => {
  // const [isSelected, setSelected] = useState("false");

    const handlePress = () => {
      //  setSelected(!isSelected)
      //  console.log(isSelected)
      }

      

    const activities = [{ 
      name : "RESTAURANT", 
      isSelected: false
    },
    {
      name : "BAR",
       isSelected: false
    },
    {
      name : "AFTER WORKS",
       isSelected: false 
    } 
    ];


    const [selectedActivities, setSelectedActivities] = useState(activities);
    
    const selectActivity = ( activity) => {
      console.log(activity)
      //  setSelected(!isSelected)
      //  console.log(isSelected)
      }


    const hostGenders = [{
      name: "FEMALE",
      isSelected : false
    },
    {
      name: "MALE",
      isSelected : false
    } 
  ];


    const keywords= [{
      name: "bruxelles",
      isSelected: false
    },
    {
      name: "Museum",
      isSelected: false
    }
   ]

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.filter}>My Filters</Text>
      
      <View style={styles.containerFilter}>
        <Text style={styles.filtertext}>ACTIVITY</Text>
      <View style= {styles.buttonContainer}>
           {selectedActivities.map((activity) => {
            console.log(activity)
              return( 
               <ButtonFilter key={activity.name} text={activity.name} handlePress={selectActivity} isSelected={activity.isSelected} />
           )
          })}
      </View>
        
    </View> 

      <Text style={styles.filtertext}>HOSTED BY</Text>
    <View style={styles.containerFilter}>
        {hostGenders.map(gender => {
          return( 
            <ButtonFilter text={gender.name} handlePress={handlePress} isSelected={gender.isSelected} />
          )
        })}
    </View> 

      <Text style={styles.filtertext}>KEYWORDS</Text>
      <View style={styles.containerFilter}>  
        {keywords.map(keyword => {
          return( 
            <ButtonFilter text={keyword.name} handlePress={handlePress} isSelected={keyword.isSelected} />
          )
        })}
      </View>

      <Text style={styles.filtertext}>DATE</Text>
         <TextInput value={"start"}>    
         </TextInput>
         <TextInput value={"end"}>    
         </TextInput>
         <ButtonFilter text={'verification'} handlePress={() => { console.log('jai été clicked')}} />
    </View>
  );
};

export default FiltersScreen;

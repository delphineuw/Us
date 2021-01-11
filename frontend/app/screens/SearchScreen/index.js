import React, {useState} from 'react';
import { View, Image, Text, Alert, TextInput } from 'react-native';

// Local imports
import logo from '../../assets/logo.png';
import styles from './styles';
import ButtonFilter from '../../components/ButtonTemplate/ButtonFilter';
import Form from '../../components/FormTemplate/index';



const Separator = () => (
  <View style={styles.separator} />
);


const editForm = [
  {
    id: 4,
    render: 'date',
    label: 'Start Date',
    value: new Date()
  },
  {
    id: 5,
    render: 'date',
    label: 'End Date',
    value: new Date()
  }
];



//     const UselessTextInput = () => {
//     const [value, onChangeText] = React.useState('23/01/2021');

//      return (
//        <>
//      <TextInput
//       style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:100, margin: 10, left: 150, justifyContent: "center"}}
//       onChangeText={text => onChangeText(text)}
//       value={value}
//     />
//      <TextInput
//       style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:100, margin: 10, right: 150, }}
//       onChangeText={text => onChangeText(text)}
//       value={value}
//     />
//     </>
    
//   );
// }
 

const SearchScreen = props => {
  const [isSelected, setSelected] = useState("false");
  

    const handlePress = () => {
      // Alert.alert('jai ete clicker')
      setSelected(!isSelected)
      console.log(isSelected)
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
    
    // const newActivity = [{
    //   name :  "HOTELS",
    //   isSelected :false
    // }]
    
    const selectActivity = ( activity) => {
      console.log(activity)

      //  setSelectedActivities(activity)
      //  setSelected(!isSelected)
      //  console.log(isSelected)
      }


    const hostGenders = [{
      name: "FEMALE",
      isSelected : true
    },
    {
      name: "MALE",
      isSelected :false
    } 
  ];


    const keywords= [{
      name: "BRUXELLES",
      isSelected: false
    },
    {
      name: "MUSEUM",
      isSelected: false
    }
   ]

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.filter}>My Filters</Text>
      <Separator />

      <Text style={styles.filtertext}>ACTIVITY</Text> 

        <View style= {styles.containerFilter}>
           {selectedActivities.map((activity) => {
            console.log(activity)
              return(      
                 <ButtonFilter key={activity.name} text={activity.name} handlePress={selectActivity} />
           )
          })}
        </View>
         <Separator />

        <Text style={styles.filtertext}>HOSTED BY</Text>
        <View style={styles.containerFilter}> 
          {hostGenders.map(gender => {
           return( 
            <ButtonFilter key={gender.name} text={gender.name} handlePress={handlePress} isSelected={gender.isSelected} />
          )
         })}
        </View> 
         <Separator />

        <Text style={styles.filtertext}>KEYWORDS</Text>
        <View style={styles.containerFilter}> 
          {keywords.map(keyword => {
             return( 
            <ButtonFilter key={keyword.name} text={keyword.name} handlePress={handlePress} isSelected={keyword.isSelected} />
          )
         })}
        </View>
         <Separator />

          <Text style={styles.filtertext}>DATE</Text>
        <View style={styles.containerFilterDate}>

        
         <Form inputs={editForm} onSubmit={val => console.log(val)} />
        
        </View>
        
    </View>
  );
};

export default SearchScreen;

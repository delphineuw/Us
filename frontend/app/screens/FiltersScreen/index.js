import React from 'react';
import { View, Image, Text } from 'react-native';

// Local imports
import logo from '../../assets/logo.png';
import styles from './styles';
import ButtonFullRed from '../../components/ButtonTemplate/ButtonFullRed/index';
import ButtonEmptyBlack from '../../components/ButtonTemplate/ButtonEmptyBlack/index';
import ButtonFilterBig from '../../components/ButtonTemplate/ButtonFilterBig/index';



const FiltersScreen = props => {

    const handlePress = () => {
        console.log('hello')}

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.filter}>My Filters</Text>
      <Text style={styles.filtertext}>Activity</Text>
      <ButtonEmptyBlack text={'hello'} handlePress={handlePress} />


      <View style={styles.containerFilter}>
         <ButtonFullRed text={"Restaurant"} handlePress={handlePress} />
         <ButtonFullRed text={"Bar"} handlePress={handlePress} />
         <ButtonFullRed text={"After Work"} handlePress={handlePress} />
      </View>   
    </View>
  );
};

export default FiltersScreen;

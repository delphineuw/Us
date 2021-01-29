import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

// Local imports
import styles from './styles';
import ButtonFullRed from '../../components/ButtonTemplate/ButtonFullRed/index.js';
import ButtonFullGreen from '../../components/ButtonTemplate/ButtonFullGreen/index.js';
import HobbieTemplate from '../../components/HobbieForm/index.js';
import hobbiesTest from '../../utils/hobbiesTest.js';

const HobbiesScreen = props => {
  const [select, setSelect] = useState(null);
  const handlePress = () => {
    Alert.alert('Saved!');
  };

  const maping = () => {
    return hobbiesTest.map(item => (
      <HobbieTemplate
        key={item.key}
        id={item.key}
        imageUri={item.imageUri}
        category={item.category}
        selected={select}
        onSelect={item => setSelect(item)}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Pick your activities</Text>

      <View style={styles.gridHobbies}>{maping()}</View>

      <View style={styles.btnContainer}>
        <ButtonFullRed
          text={'Save'}
          handlePress={() => {
            if (select) {
              props.navigation.navigate('EventEditScreen', {
                categories: hobbiesTest.filter(item => item.key === select)[0]
              });
            }
          }}
        />
      </View>
    </View>
  );
};

export default HobbiesScreen;

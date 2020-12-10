import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Local imports
import styles from './styles';
import splashImg from '../../assets/splash.png';

const Example = props => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsClicked(true)}>
        <Text>{isClicked ? 'Already clicked' : 'Click please'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Example;

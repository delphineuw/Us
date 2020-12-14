import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'center', justifyContent: 'center' },
  inputs: { width: '70%', maxHeight: Dimensions.get('screen').height * 0.7 }
});

export default styles;

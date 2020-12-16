// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


// // Local imports
// import styles from './styles';
// import splashImg from '../../assets/splash.png';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       {/*<Image 
//       source={require('splash.png')}/>*/}
//       <Text > Meet anywhere, anyday! </Text>
//       <Button
//         title="Login"
//         onPress={() => navigation.navigate('Details')}
//       />
//       <Button
//         title="continue as guest"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button
//         title="go to Home"
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// }

// const Stack = createStackNavigator();


// const NavScreen = props => {
//   return (
//       <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer> 
//   );
// };

// export default NavigationScreen;

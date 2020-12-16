import * as React from 'react';
import { Button, View, StyleSheet, Text,TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome'


// Button: 

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
); 
/////////////////////////////////////////////////////////////////////////////////////

function SplashScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity  onPress={() => navigation.navigate('Welcome')}>
          <View>
              <ImageBackground source={{ uri:'file:///Users/sanaajebroun/Desktop/circle-cropped.png'}} style={{ width:200, height:200}} >
              </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  function WelcomeScreen ({ navigation }) {
    return (
      <View  style={styles.screenContainer}>
        <View style={styles.image}> 
          <ImageBackground 
              source={{ uri:'file:///Users/sanaajebroun/Desktop/circle-cropped.png'}} 
              style={{ width:100, height:100}} />
        </View>
          <Text style={styles.text}>meet, anywhere,any day </Text>
              <AppButton 
                  title="Login" 
                  size="sm" backgroundColor="#F25C75" 
                  onPress={() => navigation.navigate('Login')} 
                 />
              <AppButton 
                  title="Sing up" 
                  onPress={() => navigation.navigate('SignUp')}/>
              <Text 
                style={styles.text1} 
                onPress={() => navigation.navigate('Events')}> Continue as a guest</Text>
      </View>
    )
  }
  function LoginScreen ({ navigation }) {
    return (
      <View style={styles.screenContainer} >
          <View style={styles.image}> 
              <ImageBackground 
                  source={{ uri:'file:///Users/sanaajebroun/Desktop/circle-cropped.png'}} 
                  style={{ width:100, height:100}} />
          </View>
          <View  style={{
              borderBottomColor: '#000000',
              borderBottomWidth: 1,
            }}>
              <TextInput
              placeholder='Email'
              />  
          </View>
          <View  style={{
              borderBottomColor: '#000000',
              borderBottomWidth: 1,
            }}>
              <TextInput
              placeholder='Password'
            />  
          </View>
          <AppButton 
          title="Login" />
    
      </View>
    )
  }
function SignUpScreen ({ navigation }) {
    return (
      <View style={styles.screenContainer} >
          <View style={styles.image}> 
            <ImageBackground 
                source={{ uri:'file:///Users/sanaajebroun/Desktop/circle-cropped.png'}} 
                style={{ width:100, height:100}} />
          </View>
          <View  style={{
            borderBottomColor: '#000000',
            borderBottomWidth: 1,
          }}>
            <TextInput
            placeholder='First Name'
            />  
        </View>
        <View  style={{
          borderBottomColor: '#000000',
          borderBottomWidth: 1,
        }}>
          <TextInput
          placeholder='last Name'
          />  
      </View>
      <View  style={{
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
        <TextInput
        placeholder='Email'
        />  
    </View>
    <View  style={{
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
    }}>
      <TextInput
      placeholder='Password'
      />  
  </View>
          <AppButton 
          title="Login" />      
      </View>
    )
  }
  
  function ProfileScreen ({ navigation }) {
    return (
      <View style={styles.screenContainer} >
          <Button title="Edit profile" onPress={() => navigation.navigate('Edit')}/>
      </View>
    )
  }
  function EventScreen({ navigation }) {
    return (
      <View style={styles.screenContainer} >

      </View>
    );
  }

function EditScreen ({ navigation }) {
    return (
      <View style={styles.screenContainer} >
      <Button title="Hobbies" />
      <Button title="Save" />
  
      </View>
    )
  }
  

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SplashScreen}   />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Events" component={EventScreen}   />
        <Stack.Screen name="SignUp" component={SignUpScreen}   />
        <Stack.Screen name="Profile" component={ProfileScreen}   />
        <Stack.Screen name="Edit" component={EditScreen}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    flex: 1,
    margin:80,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#F25C75",
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    elevation: 5,
    margin:20,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  text: {
    fontFamily:'Avenir-Medium',
    fontSize:30,
    textAlign:'center',
    margin:20,
    color:"#838383",
  },
  image: {
    marginLeft:70,
  },
  text1:{
    fontSize:19,
    textAlign:'center',
    margin:20,
    color:"#2A0F93",
  }
});



export default AppNavigation;

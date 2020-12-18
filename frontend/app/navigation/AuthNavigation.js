import * as React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// local imports
import  ButtonFullRed from '../components/ButtonTemplate/ButtonFullRed'
import splash from '../assets/splash.png'
import FormTemplate from '../components/FormTemplate/index'
import AllScreen from '../screens/EventsScreen/index'
import styles from './styles'

const exampleForm = [
  {
    id: 1,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Email',
    multiline: false,
    type: 'emailAddress',
    security: false,
    autoCapitalize: 'none',
    value: ''
  },
  {
    id: 2,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Password',
    multiline: false,
    type: 'password',
    security: true,
    autoCapitalize: 'none',
    value: ''
  },
  {
    id: 3,
    render: 'radio',
    label: 'Gender',
    options: ['Male', 'Female', 'Other'],
    value: 'Other'
  },
  {
    id: 4,
    render: 'date',
    label: 'Date of birth',
    value: new Date()
  }
];

const Stack = createStackNavigator();

 function WelcomeScreen ({ navigation }) {
     return (
    <View style={styles.container}>
          <Image
            source={splash}
            style={{ width:200, height:200, borderRadius:90 }} />

            <Text style={styles.text} > meet anywhere, anyday</Text>
            <ButtonFullRed
              text={'login'}
              handlePress={() => navigation.navigate('Login')}
              style={styles.button}
               />
            <ButtonFullRed
            text={'Sign up'}
            handlePress={() => navigation.navigate('SignUp')}
              />
            <Text style={styles.text1}
            onPress={() => navigation.navigate('Events')}> Continue as a guest</Text>
         </View>
   )
}

function LoginScreen ({ navigation }){
  return (
    <View style={styles.container}>
        <Image
        source={splash}
        style={{ width:200, height:200, borderRadius:90}} />
        <View  style={{
          borderBottomColor: '#000000',
          borderBottomWidth: 1,
          margin:20
          }}>
          <TextInput
        placeholder='Email'
        />
    </View>
    <View
          style={{
          borderBottomColor: '#000000',
          borderBottomWidth: 1,
          margin:50
          }}>
          <TextInput
          placeholder='Password'
        />
    </View>

    <ButtonFullRed
    text={'login'}
    style={styles.button}
     />
    </View>

  )
}

function SignUpScreen ({ navigation }){
  const submitHandler = data => console.log(data);

  return (
    <View style={styles.container}>
        <Image
        source={splash}
        style={{ width:100, height:100, borderRadius:90  }} />
        <View style={styles.form}>
         <FormTemplate inputs={exampleForm} onSubmit={submitHandler} />
        </View>
          <ButtonFullRed
                text={'Submit'}
                handlePress={() => navigation.navigate('SignUp')}
                  />

    </View>

  )
}


function EventScreen ({ navigation }){
  return (
    <View>
        <AllScreen/>
      </View>
    )
  }


function AuthNavigation () {
  return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={WelcomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="Events" component={EventScreen} />
          </Stack.Navigator>
        </NavigationContainer>
  )

}

 export default AuthNavigation;

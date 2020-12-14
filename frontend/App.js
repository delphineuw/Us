import React from 'react';
import { Text, View } from 'react-native';

// Local imports
import FormTemplate from './app/components/FormTemplate';

const exampleForm = [
  {
    placeholder: 'Write here...',
    label: 'Name',
    multiline: false,
    type: 'name',
    security: false,
    autoCapitalize: 'sentences'
  },
  {
    placeholder: 'Write here...',
    label: 'Email',
    multiline: false,
    type: 'emailAddress',
    security: false,
    autoCapitalize: 'none'
  },
  {
    placeholder: 'Write here...',
    label: 'Password',
    multiline: false,
    type: 'password',
    security: true,
    autoCapitalize: 'none'
  }
];

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FormTemplate inputs={exampleForm} />
    </View>
  );
};

export default App;

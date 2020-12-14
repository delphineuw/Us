import React from 'react';
import { Text, View } from 'react-native';

// Local imports
import FormTemplate from './app/components/FormTemplate';
import exampleForm from './app/utils/exampleForm';

const App = () => {
  const submitHandler = data => console.log(data);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FormTemplate inputs={exampleForm} onSubmit={submitHandler} />
    </View>
  );
};

export default App;

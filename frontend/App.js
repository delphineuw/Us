import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStore } from "redux";
import { Provider, useSelector } from "react-redux";
import { AppLoading } from "expo";
import { useFonts, Chilanka_400Regular } from "@expo-google-fonts/chilanka";

// Local imports
import MainNavigator from "./app/navigation/MainNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authReducer from "./app/store/auth-reducer";

const store = createStore(authReducer);

const StateHandler = () => {
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <NavigationContainer>
      {isLogged ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

const App = () => {
  let [fontsLoaded] = useFonts({
    Chilanka_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <StateHandler />
      </Provider>
    );
  }
};

export default App;

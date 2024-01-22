import React from 'react';


import Splash from './src/screens/Auth/Splash';
import SignUp from './src/screens/Auth/SignUp';
import SignIn from './src/screens/Auth/SignIn';
import {NavigationContainer} from '@react-navigation/native';
const Stack=createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Splash}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


import React from 'react';


import Splash from './src/screens/Auth/Splash';
import SignUp from './src/screens/Auth/SignUp';
import SignIn from './src/screens/Auth/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import Home from './src/screens/Lab7/Homescreen';
const Stack=createNativeStackNavigator();
const Tab= createBottomTabNavigator();
const Tabs= () => (
  <Tab.Navigator
  screenOptions={({route}) => ({
    tabBarIcon: ({focused})=>{
      let icon;
      if(route.name==="Home"){
        icon= focused
        ? require('./src/assets/clarity_home-solid(1).png')
        : require('./src/assets/clarity_home-solid.png');
      }else if(route.name ==='Profile') {
        icon = focused
        ? require('./src/assets/tabs/marker 1.png')
        : require('./src/assets/tabs/Vector(1)png');

      }else if (route.name === 'Favorites'){
        icon =focused
        ? require("./src/assets/tabs/bi-person-fill.png")
        : require('./src/assets/tabs/bi-person-fill.png');
      }
      return <Image style={{width:24, height:24,}} source={icon}/>
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopColor:'#DADADA'},
      })}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Favorites" component={Favorites}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
);
const App = () => {
  const isSignedIn =true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn? (
          <>
          <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
          </>
        ) : (
          <>
        <Stack.Screen 
        name="Splash" 
        component={Splash}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="SignUp" 
        component={SignUp} 
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="SignIn" 
        component={SignIn}
         options={{headerShown:false}}
         />
        </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    // <Crud></Crud>
  );
};

export default App;


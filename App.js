import React,  { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/login';
import Home from './views/home';
import Register from './views/register';
import Register2 from './views/register_2';
import Charter from './views/charter';
import OnBoarding from './views/onBoarding';
import Success from './views/success';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Register2' component={Register2} />
        <Stack.Screen name='Charter' component={Charter} />
        <Stack.Screen name='Success' component={Success} />
        <Stack.Screen name='OnBoarding' component={OnBoarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

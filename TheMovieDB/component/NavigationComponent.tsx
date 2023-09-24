import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from '../screens/LoginScreen';
import TabNavigationComponent from './TabNavigationComponent';

export default function NavigationComponent() {
    const Stack = createNativeStackNavigator();
  
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
                <Stack.Screen name='Home' component={TabNavigationComponent} options={{headerShown: false}} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
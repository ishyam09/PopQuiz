import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeScreen';
import Profile from '../screens/ProfileScreen';
import Watchlist from '../screens/WatchlistScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigationComponent() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='HomeScreen' component={Home} options={{headerShown: false}} />
      <Tab.Screen name='WatchList' component={Watchlist} options={{headerShown: false}} />
      <Tab.Screen name='Profile' component={Profile} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}

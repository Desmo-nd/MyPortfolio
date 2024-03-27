import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, About, Contact } from '../screens'; // Import other screens if needed

const Tab = createBottomTabNavigator();

const RightTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default RightTabNavigation;

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, AboutMe } from '../screens'; 

const Drawer = createDrawerNavigator();

const RightNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="AboutMe" component={AboutMe} />
    </Drawer.Navigator>
  );
};

export default RightNavigation;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import Home from './screens/Home';

export default function App() {
  return (
    <NavigationContainer> 
      <Home/>
    </NavigationContainer>
  );
}

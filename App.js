import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/routes/AppStack';
import { navigationRef } from './src/services/RootNavigation';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef} >
      <AppStack />
    </NavigationContainer>
  );
}

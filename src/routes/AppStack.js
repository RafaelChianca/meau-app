import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LeftDrawer from './LeftDrawer';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="LeftDrawer"
        component={LeftDrawer}
      />
    </Stack.Navigator>
  );
};
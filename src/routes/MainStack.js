import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Ops from '../pages/Ops';
import PetForm from '../pages/PetForm';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>  
        <Stack.Screen name="Ops" component={Ops} options={{headerShown: false}}/>
        <Stack.Screen name="PetForm" component={PetForm} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};
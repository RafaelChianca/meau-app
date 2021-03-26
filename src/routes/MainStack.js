import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Ops from '../pages/Ops';
import RegisterPet from '../pages/RegisterPet';
import Home from '../pages/Home';
import Adopt from '../pages/Adopt';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>  
        <Stack.Screen name="Ops" component={Ops} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="RegisterPet" component={RegisterPet} options={{headerShown: false}}/>
        <Stack.Screen name="Adopt" component={Adopt} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Ops from '../pages/Ops';
import RegisterPet from '../pages/RegisterPet';
import Home from '../pages/Home';
import Adopt from '../pages/Adopt';
import MyPets from '../pages/MyPets';
import PetDetails from '../pages/PetDetails';
import Notification from '../pages/Notification';
import Chat from '../pages/Chat';
import ChatDetails from '../pages/ChatDetails';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>  
        <Stack.Screen name="Ops" component={Ops} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="RegisterPet" component={RegisterPet} options={{headerShown: false}}/>
        <Stack.Screen name="Adopt" component={Adopt} options={{headerShown: false}}/>
        <Stack.Screen name="MyPets" component={MyPets} options={{headerShown: false}}/>
        <Stack.Screen name="PetDetails" component={PetDetails} options={{headerShown: false}}/>
        <Stack.Screen name="Notification" component={Notification} options={{headerShown: false}}/>
        <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}}/>
        <Stack.Screen name="ChatDetails" component={ChatDetails} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};
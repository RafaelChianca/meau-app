import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PetForm from './pages/PetForm';
import Ops from './pages/Ops';
import Register from './pages/Register';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Register" screenOptions={{ headerShown: false}}>
                <Screen name="PetForm" component={PetForm} />
                <Screen name="Ops" component={Ops} />
                <Screen name="Register" component={Register} />
                {/* <Screen name="Login" component={Login} /> */}
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
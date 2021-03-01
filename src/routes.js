import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PetForm from './pages/PetForm';
import Ops from './pages/Ops';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
    return (
        <NavigationContainer>
            <Navigator initialRouteName="PetForm" screenOptions={{ headerShown: false}}>
                <Screen name="PetForm" component={PetForm} />
                <Screen name="Ops" component={Ops} />
                {/* <Screen name="Login" component={Login} /> */}
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
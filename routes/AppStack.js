import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../src/pages/Login';
import Ops from '../src/pages/Ops';

const { Navigator, Screen} = createStackNavigator();

function AppStack(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                {/* <Screen name="Home" component={Home} /> */}
                <Screen name="Login" component={Login} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as firebase from 'firebase';
import apiKeys from './config/keys';

import PetForm from './pages/PetForm';
import Ops from './pages/Ops';
import Register from './pages/Register';
import Login from './pages/Login';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){

    if (!firebase.apps.length) {
        console.log('Connected with Firebase')
        firebase.initializeApp(apiKeys.firebaseConfig);
    }

    return (
        <NavigationContainer>
            <Navigator initialRouteName="Register" screenOptions={{ headerShown: false}}>
                {/* <Screen name="PetForm" component={PetForm} />
                <Screen name="Ops" component={Ops} />
                <Screen name="Register" component={Register} /> */}
                <Screen name="Login" component={Login} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
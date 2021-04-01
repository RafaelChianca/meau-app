import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import LeftDrawer from './LeftDrawer';
import { navigationRef } from '../services/RootNavigation';
import { loadUserRequested, logOutRequested } from '../store/actions/profile';

const Stack = createStackNavigator();

export default function AppStack() {

  const dispatch = useDispatch();
  const userReducer = useSelector(state => state.profile.user)
  
  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log("USUARIO NO ROUTES ------", user)
    if (user && Object.keys(user).length > 0) {
      dispatch(loadUserRequested(user.email));
    } else {
      dispatch(logOutRequested())
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="LeftDrawer"
          component={LeftDrawer}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};
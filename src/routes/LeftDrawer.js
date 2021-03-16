import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './MainStack';
import { SideMenu } from '../atomic/organisms/SideMenu';

const Drawer = createDrawerNavigator();

export default () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <SideMenu {...props} />}
            options={{headerShown: false}}
            drawerStyle={{
                width: '95%'
            }}
        >
            <Drawer.Screen name="MainStack" component={MainStack} />
        </Drawer.Navigator>
    );
};

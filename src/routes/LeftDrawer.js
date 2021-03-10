import React from 'react';
import {View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import MainStack from './MainStack';

const Drawer = createDrawerNavigator();

export default () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerComp {...props} />}
            options={{headerShown: false}}
        >
            <Drawer.Screen name="MainStack" component={MainStack} />
        </Drawer.Navigator>
    );
};

export const CustomDrawerComp = (props) => {
    const {navigation} = props;

    return (
        <DrawerContentScrollView {...props}>
            <View style={{flexGrow: 2}}>
                <DrawerItem
                    label="Login"
                    onPress={() => navigation.navigate('Login')}
                />
                <DrawerItem
                    label="Cadastro pessoal"
                    onPress={() => navigation.navigate('Register')}
                />
                <DrawerItem
                    label="Cadastrar animal"
                    onPress={() => navigation.navigate('PetForm')}
                />
            </View>
        </DrawerContentScrollView>
    );
};
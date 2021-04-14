import React, { useEffect, useState } from 'react';
import { StatusBar, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Container, FormContainer } from './styles';
import FormTextInput from '../../atomic/molecules/FormTextInput';
import CustomButton from '../../atomic/atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import { loginRequested } from '../../store/actions/profile';

import { Title } from './style';


export default function Notification() {
    
    const loading = useSelector(state => state.profile.loading);

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handlePress = async () => {
        Keyboard.dismiss();

    };

    return(
        <Container>
            <StatusBar
                animated
                backgroundColor={'#88c9bf'}
                barStyle={'light-content'}
            />
            <CustomHeader label='Notificações' rightIcon="notification" showLeftIcon={false} style={{backgroundColor: '#cfe9e5'}} />
            <Box>
                <Title>Fulano de tal</Title>
                <Text>blz blz blz</Text>
                <CustomButton
                label="Aceitar"
                />
                <CustomButton
                label="Recusar"
                />
            </Box>
            
        </Container>
    );
}
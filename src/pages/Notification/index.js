import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Title, ContentContainer } from './styles';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import NotificationList from '../../atomic/organisms/NotificationList';

export default function Notification() {

    return(
        <Container {...rest}>
            <StatusBar
                animated
                backgroundColor={'#88c9bf'}
                barStyle={'light-content'}
            />
            <CustomHeader
                label='Notificações'
                leftIcon="menu"
                style={{backgroundColor: '#cfe9e5'}}
            />
            <ContentContainer>
                <NotificationList />
            </ContentContainer>
        </Container>
    );
}
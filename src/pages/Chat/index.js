import React from 'react';
import { StatusBar } from 'react-native';
import { Container, ContentContainer } from './styles';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import ChatList from '../../atomic/organisms/ChatList';

export default function Chat() {

    return(
        <Container>
            <StatusBar
                animated
                backgroundColor={'#589b9b'}
                barStyle={'light-content'}
            />
            <CustomHeader
                label='Chat'
                leftIcon="menu"
                style={{backgroundColor: '#88c9bf'}}
            />
            <ContentContainer>
                <ChatList/>
            </ContentContainer>
        </Container>
    );
}
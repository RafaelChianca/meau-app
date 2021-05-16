import React from 'react';
import { StatusBar } from 'react-native';
import { Container, ContentContainer } from './styles';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import CustomButton from '../../atomic/atoms/CustomButton';
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
                rightIcon="search"
                style={{backgroundColor: '#88c9bf'}}
            />
            <ContentContainer>
                <ChatList/>
            </ContentContainer>
            <CustomButton
                label="FINALIZAR UM PROCESSO"
                style={{marginBottom: 24, backgroundColor: '#88c9bf'}}
                // onPress={handlePress}
                // loading={loading}
            />
        </Container>
    );
}
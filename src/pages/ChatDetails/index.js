import React from 'react';
import { StatusBar } from 'react-native';
import { Container, ContentContainer, CustomInput, CustomText, Send, Group } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import CustomButton from '../../atomic/atoms/CustomButton';
import CustomTextInput from '../../atomic/atoms/CustomTextInput';

export default function ChatDetails() {

    return(
        <Container>
            <StatusBar
                animated
                backgroundColor={'#589b9b'}
                barStyle={'light-content'}
            />
            <CustomHeader
                label='Nome da pessoa'
                leftIcon="back"
                rightIcon="opt"
                style={{backgroundColor: '#88c9bf'}}
            />
            <ContentContainer>
                <CustomText>blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</CustomText>
            </ContentContainer>
            <Group>
                <CustomInput style={{marginRight: 16}} />
                <Send style={{marginTop: 8}}>
                <Icon name='send' color='white' size={24}/>
                </Send>
            </Group>
        </Container>
    );
}
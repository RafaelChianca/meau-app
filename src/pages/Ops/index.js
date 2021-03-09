import React from 'react';
import {TouchableWithoutFeedback, StatusBar, Text} from 'react-native';
import { Header, Container, Label, Ops} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../atomic/atoms/CustomButton';

export default function Register() {

    return(
        <Container>
            <StatusBar
                animated
                backgroundColor="#88c9bf"
                barStyle={"light-content"}
            />

            <Header>
                <TouchableWithoutFeedback>
                    <Icon name='arrow-left' color='#434343' size={24} style={{marginLeft: 16}}/> 
                </TouchableWithoutFeedback>
                <Text style={{marginLeft:30, fontSize:18}}>Cadastro</Text>
            </Header>

            <Ops>Ops!</Ops>
            <Label>Você não pode realizar esta ação sem</Label>
            <Label>possuir cadastro</Label>

            <CustomButton
                label="FAZER CADASTRO"
                style={{backgroundColor: '#88c9bf',
                borderRadius: 2,
                width:232,
                height:40,
                marginTop: 16,
                marginBottom: 44,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',}}
            />

            <Label>Já possui cadastro?</Label>

            <CustomButton
                label="FAZER LOGIN"
                style={{backgroundColor: '#88c9bf',
                borderRadius: 2,
                width:232,
                height:40,
                marginTop: 16,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',}}
            />
        </Container>
    );
}

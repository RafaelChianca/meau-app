import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import CustomHeader from '../../atomic/molecules/CustomHeader/index';
import PertForm from '../../atomic/organisms/PertForm';
import { Container } from './styles';

export default function RegisterPet() {

    return (
        <Container>
            <StatusBar
                animated={true}
                backgroundColor="#f7a800"
                barStyle={'light-content'}
            />
            <CustomHeader label="Cadastro do animal" style={{backgroundColor: '#ffd358'}} />
            <ScrollView showsVerticalScrollIndicator={false} style={{flexGrow: 1, paddingBottom: 50}}>
                <PertForm style={{flex: 1, paddingLeft: 24, paddingRight: 24}} />
            </ScrollView>
        </Container>
    );
}

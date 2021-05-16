import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Label, Ops} from './styles';
import CustomButton from '../../atomic/atoms/CustomButton';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import * as RootNavigation from '../../services/RootNavigation';

export default function Register() {

    return(
        <Container>
            <StatusBar
                animated
                backgroundColor="#88c9bf"
                barStyle={"light-content"}
            />
            <CustomHeader label="Cadastro" style={{backgroundColor: '#cfe9e5'}} />
            <Ops>Ops!</Ops>
            <Label>Você não pode realizar esta ação sem</Label>
            <Label>possuir cadastro</Label>
            <CustomButton
                label="FAZER CADASTRO"
                style={{
                    backgroundColor: '#88c9bf',
                    borderRadius: 2,
                    width:232,
                    height:40,
                    marginTop: 16,
                    marginBottom: 44,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}
                onPress={() => RootNavigation.resetTo('Register')}
            />
            <Label>Já possui cadastro?</Label>
            <CustomButton
                label="FAZER LOGIN"
                style={{
                    backgroundColor: '#88c9bf',
                    borderRadius: 2,
                    width:232,
                    height:40,
                    marginTop: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}
                onPress={() => RootNavigation.resetTo('Login')}
            />
        </Container>
    );
}

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, HelloText, IntroText, OptionButton, LogoContainer } from './styles';
import MeauBlue from '../../../assets/Meau_marca_2.png'

export default function Introduction() {

    const navigation = useNavigation();

    const openAdoption = () => {
        navigation.navigate('Adopt');
    }

    const openHelp = () => {}

    const openRegisterPet = () => {
        navigation.navigate('RegisterPet');
    }

    return (
        <Container>
            <HelloText>Olá!</HelloText>
            <IntroText>Bem vindo ao Meau!{"\n"}Aqui você pode adotar, doar e ajudar cães e gatos com facilidade.{"\n"}Qual o seu interesse?</IntroText>
            <OptionButton label='adotar' onPress={openAdoption} />
            <OptionButton label='ajudar' onPress={openHelp} disabled />
            <OptionButton label='cadastrar animal' onPress={openRegisterPet} />
            <LogoContainer source={MeauBlue} />
        </Container>
    )
}
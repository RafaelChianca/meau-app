import React from 'react';
import { StatusBar } from 'react-native';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import PetInfo from '../../atomic/organisms/PetInfo';
import { Container } from './styles';

export default function PetDetails({route, ... rest}) {
    return(
        <Container>
            <StatusBar
                animated
                backgroundColor={route.params.mainColor || "#f7a800"}
                barStyle={"light-content"}
            />        
            <CustomHeader label={route.params.pet.name} rightIcon="share" style={{backgroundColor: (route.params.mainColor || "#f7a800"), marginBottom: 0}}/>
            <PetInfo pet={route.params.pet} {...rest}/>
        </Container>
    );
}
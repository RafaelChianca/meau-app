import React from 'react';
import { StatusBar } from 'react-native';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import AdoptDetails from '../../atomic/organisms/AdoptionDetails';
import { Container } from './styles';

export default function PetDetails({route, ... rest}) {
    return(
        <Container>
            <StatusBar
                animated
                backgroundColor="#f7a800"
                barStyle={"light-content"}
            />        
            <CustomHeader label={route.params.pet.name} rightIcon="share" style={{backgroundColor: '#ffd358', marginBottom: 0}}/>
            <AdoptDetails pet={route.params.pet} {...rest}/>
        </Container>
    );
}
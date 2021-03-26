import React, { useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import CustomHeader from '../../atomic/molecules/CustomHeader/index';
import PertForm from '../../atomic/organisms/PertForm';
import { Container, FormLabel } from './styles';

export default function RegisterPet() {

    const [selected, setSelected] = useState(1);

    function renderFormLabel() {
        switch (selected) {
            case 1:
                return 'Adoção';
            case 2:
                return 'Apadrinhar';
            case 3:
                return 'Ajuda';
            default:
                return '';
        }
    }

    return (
        <Container>
            <StatusBar
                animated={true}
                backgroundColor="#f7a800"
                barStyle={'light-content'}
            />
            <CustomHeader label="Cadastro do animal" style={{backgroundColor: '#ffd358'}} />
            <View style={{flex: 1, paddingLeft: 24, paddingRight: 24}}>
                <ScrollView showsVerticalScrollIndicator={false} style={{flexGrow: 1, paddingBottom: 50}}>
                    <FormLabel style={{marginTop: 20}}>{renderFormLabel()}</FormLabel>
                    <PertForm />
                </ScrollView>
            </View>
        </Container>
    );
}

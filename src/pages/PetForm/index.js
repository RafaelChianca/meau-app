import React, { useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import Separator from '../../atomic/atoms/Separator';
import SwitcherButton from '../../atomic/atoms/SwitcherButton';
import CustomHeader from '../../atomic/molecules/CustomHeader/index';
import SwitcherSelector from '../../atomic/molecules/SwitcherSelector';
import AdoptForm from '../../atomic/organisms/AdoptForm';
import { Container, FormLabel } from './styles';

export default function PetForm() {

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
            <CustomHeader label="Cadastro do animal" />
            <View style={{flex: 1, paddingLeft: 24, paddingRight: 24}}>
                <SwitcherSelector label="Tenho interesse em cadastrar o animal para:">
                    <SwitcherButton onPress={() => setSelected(1)} selected={selected === 1} style={{marginRight: 8}}>Adoção</SwitcherButton>
                    <SwitcherButton onPress={() => setSelected(2)} selected={selected === 2} disabled style={{marginRight: 8}}>Apadrinhar</SwitcherButton>
                    <SwitcherButton onPress={() => setSelected(3)} selected={selected === 3} disabled>Ajuda</SwitcherButton>
                </SwitcherSelector>
                <Separator style={{marginTop: 20, marginBottom: 20}}/>
                <ScrollView showsVerticalScrollIndicator={false} style={{flexGrow: 1, paddingBottom: 50}}>
                    <FormLabel>{renderFormLabel()}</FormLabel>
                    <AdoptForm />
                </ScrollView>
            </View>
        </Container>
    );
}

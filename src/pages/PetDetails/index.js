import React from 'react';
import { Alert, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../atomic/atoms/CustomButton';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import PetInfo from '../../atomic/organisms/PetInfo';
import { deletePetRequested } from '../../store/actions/pet';
import { Container } from './styles';

export default function PetDetails({route, ... rest}) {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.profile);

    const removePet = (petID) => {
        if (petID) {
            Alert.alert(
                "Deseja mesmo remover esse animal?",
                'Ao confirmar o cadastro do pet será excluído do sistema',
                [
                    { text: 'Cancelar' },
                    { text: "Ok", onPress: () => confirmPetDelete(petID) }
                ],
                { cancelable: true }
            )
        }
    }

    const confirmPetDelete = (petID) => {
        if (petID) {
            dispatch(deletePetRequested(petID));
        }
    }

    return(
        <Container>
            <StatusBar
                animated
                backgroundColor={route.params.mainColor || "#f7a800"}
                barStyle={"light-content"}
            />        
            <CustomHeader
                label={route.params.pet.name}
                // TO DO
                // rightIcon="share"
                style={{
                    backgroundColor: (route.params.mainColor || "#f7a800")
                    , marginBottom: 0
                }}
            />
            <PetInfo pet={route.params.pet} {...rest}/>
            {user.id === route?.params?.pet?.owner?.id &&
                <CustomButton
                    label="Remover pet"
                    style={{backgroundColor: 'red', marginBottom: 24, marginTop: 12}}
                    labelStyle={{color: 'white'}}
                    onPress={() => removePet(route?.params?.pet?.id)}
                />
            }
        </Container>
    );
}
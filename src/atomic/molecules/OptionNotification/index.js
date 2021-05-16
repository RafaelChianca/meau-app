import React from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { acceptAdoptionRequested, declineAdoptionRequested } from '../../../store/actions/pet';
import { Container, InfoText, TitleContainer, OptionsContainer, OptionButton } from './styles';

export default function OptionNotification({ notification, headerColor = '#cfe9e5', ...rest }) {

  const dispatch = useDispatch();

  const accept = () => {
    Alert.alert(
      "Deseja mesmo confirmar esta adoção?",
      'Ao confirmar o animal será transferido para outro tutor.',
      [
          { text: 'Cancelar' },
          { text: "Ok", onPress: () => dispatch(acceptAdoptionRequested(notification.targetID, notification.adopterID, notification.petID)) }
      ],
      { cancelable: true }
    )
  }

  const decline = () => {
    Alert.alert(
      "Deseja mesmo recusar esta adoção?",
      'Ao confirmar o animal permanecerá no processo de adoção.',
      [
          { text: 'Cancelar' },
          { text: "Ok", onPress: () => dispatch(declineAdoptionRequested(notification.targetID, notification.adopterID, notification.petID)) }
      ],
      { cancelable: true }
    )
  }

  return (
    <Container {...rest}>
      <TitleContainer headerColor={headerColor}>
        <InfoText>{notification.body ? notification.body : ''}</InfoText>
      </TitleContainer>
      <OptionsContainer>
        <OptionButton onPress={accept} style={{backgroundColor: 'green'}}>
          <Icon name='check' color='white' size={50}/>
        </OptionButton>
        <OptionButton onPress={decline} style={{backgroundColor: 'red'}}>
          <Icon name='close' color='white' size={50}/>
        </OptionButton>
      </OptionsContainer>
    </Container>
  );
}
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, HeaderContainer, PetName, PetImage, InfoContainer, PetInfo } from './styles';

export default function AdoptOption({ ...rest }) {

  const navigation = useNavigation();

  const openPet = () => {

  }

  const addFavorite = () => {

  }

  return (
    <Container {...rest}>
      <HeaderContainer>
        <PetName>Pequi</PetName>
        <TouchableOpacity onPress={addFavorite}>
          <Icon name='heart' color={'#434343'} size={24}/>
        </TouchableOpacity>
      </HeaderContainer>
      <PetImage source={{uri: 'https://www.ourofinosaudeanimal.com/media/old/uploads/blog/post/fotos/2014/20140918100642.jpg.600x500_q85_box-269%2C0%2C931%2C551_crop_detail.jpg'}} />
      <InfoContainer>
        <PetInfo>macho</PetInfo>
        <PetInfo>adulto</PetInfo>
        <PetInfo>médio</PetInfo>
        <PetInfo>samambaia sul - distrito federal</PetInfo>
      </InfoContainer>
    </Container>
  );
}
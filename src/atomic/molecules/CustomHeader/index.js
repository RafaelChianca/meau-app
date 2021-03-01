import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, StartContainer, MiddleContainer, EndContainer, Button, Label } from './styles';
import { useNavigation, useNavigationState } from '@react-navigation/native';

export default function CustomHeader({ label, ...rest }) {

  const navigation = useNavigation();
  const navInfo = useNavigationState(state => state);

  function goBack () {
    if(navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Ops');
    }
  }

  return (
    <Container {...rest}>
      <StartContainer>
        {navInfo.index !== 0 &&
          <Button onPress={goBack}>
            <Icon name='arrow-left' color='#434343' size={24}/>
          </Button>
        }
      </StartContainer>
      <MiddleContainer>
        <Label numberOfLines={1}>{label}</Label>
      </MiddleContainer>
      <EndContainer />
    </Container>
  );
}
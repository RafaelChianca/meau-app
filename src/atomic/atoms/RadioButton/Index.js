import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Radio, RadioLabel } from './styles';

export default function RadioButton({ label, selected, ...rest }) {
  return (
    <Container {...rest}>
      <Radio>
        {selected &&
          <Icon name='check' color='#434343' size={18}/>
        }
      </Radio>
      <RadioLabel>{label}</RadioLabel>
    </Container>
  );
}

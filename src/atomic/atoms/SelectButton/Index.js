import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Radio, RadioLabel } from './styles';

export default function SelectButton({ disabled, label, selected, ...rest }) {
  return (
    <Container {...rest} disabled={disabled}>
      <Radio disabled={disabled}>
        {selected &&
          <Icon name='check' color='#434343' size={18}/>
        }
      </Radio>
      <RadioLabel disabled={disabled}>{label}</RadioLabel>
    </Container>
  );
}

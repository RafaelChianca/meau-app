import React from 'react';
import InputLabel from '../../atoms/InputLabel';
import { Container, RadioContainer } from './styles';

export default function FormRadio({ label, children, ...rest }) {

  return (
    <Container {...rest}>
      <InputLabel style={{marginBottom: 16}}>{label}</InputLabel>
      <RadioContainer>
        {children}
      </RadioContainer>
    </Container>
  );
}

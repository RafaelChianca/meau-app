import React from 'react';
import InputLabel from '../../atoms/InputLabel/Index';
import { Container, SelectContainer } from './styles';

export default function FormSelect({ label, children, ...rest }) {

  return (
    <Container {...rest}>
      {label &&
        <InputLabel style={{marginBottom: 16}}>{label}</InputLabel>
      }
      <SelectContainer>
        {children}
      </SelectContainer>
    </Container>
  );
}

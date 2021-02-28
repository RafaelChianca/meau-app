import React from 'react';
import { Container, ButtonText } from './styles';

export default function CustomButton({ label, ...rest }) {
  return (
    <Container {...rest}>
      <ButtonText>{label || 'Button Text'}</ButtonText>
    </Container>
  );
}

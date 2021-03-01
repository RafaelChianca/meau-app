import React from 'react';
import { Container, Label } from './styles';

export default function SwitcherSelector({ label, children, ...rest }) {
  return (
    <>
      <Label>{label}</Label>
      <Container {...rest}>
        {children}
      </Container>
    </>
  );
}

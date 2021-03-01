import React from 'react';
import { Container, Label } from './styles';

export default function SwitcherButton({ selected, disabled, children, ...rest }) {
  return (
    <Container selected={selected} disabled={disabled} {...rest}>
      <Label disabled={disabled}>{children}</Label>
    </Container>
  );
}

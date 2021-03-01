import React from 'react';
import { Button, Label } from './styles';

export default function CustomButton({ label, ...rest }) {
  return (
    <Button {...rest}>
      <Label>{label}</Label>
    </Button>
  );
}

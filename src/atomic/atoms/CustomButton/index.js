import React from 'react';
import { Button, Label } from './styles';

export default function CustomButton({ label, labelStyle, ...rest }) {
  return (
    <Button {...rest}>
      <Label style={labelStyle}>{label}</Label>
    </Button>
  );
}

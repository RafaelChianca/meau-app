import React from 'react';
import { Label } from './styles';

export default function InputLabel({ children, ...rest }) {
  return (
    <Label {...rest}>{children}</Label>
  );
}

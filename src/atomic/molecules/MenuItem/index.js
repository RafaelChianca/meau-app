import React from 'react';
import { Container, Label } from './styles';
import Separator from '../../atoms/Separator'

export const MenuItem = ({ label, separator = true, ...rest }) => {

  return (
    <Container {...rest}>
      {label &&
        <Label>{label}</Label>
      }
      {separator &&
        <Separator />
      }
    </Container>
  );
}
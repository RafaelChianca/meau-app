import React from 'react';
import { Container, InfoText } from './styles';

export default function TextNotification({ notification, ...rest }) {

  return (
    <Container headerColor = '#cfe9e5' {...rest}>
      <InfoText>{notification.body ? notification.body : ''}</InfoText>
    </Container>
  );
}
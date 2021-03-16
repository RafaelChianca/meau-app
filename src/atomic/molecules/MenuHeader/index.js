import React from 'react';
import { Container } from './styles';
import ProfilePicture from '../../atoms/ProfilePicture'

export const MenuHeader = ({ ...rest }) => {

  return (
    <Container {...rest}>
      <ProfilePicture />
    </Container>
  );
}
import React from 'react';
import { Container } from './styles';
import ProfilePicture from '../../atoms/ProfilePicture'

export const MenuHeader = ({ url, ...rest }) => {

  return (
    <Container {...rest}>
      <ProfilePicture url={url} />
    </Container>
  );
}
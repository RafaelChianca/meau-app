import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Picture } from './styles';

export default function ProfilePicture({ url, ...rest }) {
  return (
    <Container {...rest}>
        {url && !!url
            ? <Picture source={{uri: url}} />
            : <Icon name='user' color='#bdbdbd' size={50}/>
        }
    </Container>
  );
}

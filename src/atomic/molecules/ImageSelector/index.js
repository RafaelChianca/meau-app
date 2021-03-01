import React from 'react';
import InputLabel from '../../atoms/InputLabel/Index';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropzone, AddImageText } from './styles';

export default function ImageSelector({ label, ...rest }) {
  return (
    <>
      {label &&
        <InputLabel style={{marginBottom: 16}}>{label}</InputLabel>
      }
      <Dropzone {...rest}>
        <Icon name='plus-circle' color='#757575' size={35} />
        <AddImageText>adicionar fotos</AddImageText>
      </Dropzone>
    </>
  );
}

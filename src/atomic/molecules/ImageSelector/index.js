import React from 'react';
import InputLabel from '../../atoms/InputLabel';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Dropzone, AddImageText } from './styles';

export default function ImageSelector({ label, ...rest }) {
  return (
    <>
      {label &&
        <InputLabel style={{marginBottom: 16}}>{label}</InputLabel>
      }
      <Dropzone {...rest}>
        <MaterialIcon name='control-point' color='#757575' size={35}/>
        <AddImageText>adicionar fotos</AddImageText>
      </Dropzone>
    </>
  );
}

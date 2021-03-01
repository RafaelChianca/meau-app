import React from 'react';
import { Input } from './styles';

export default function CustomTextInput({ ...rest }) {
  return (
    <Input
      scrollEnabled={false}
      placeholderTextColor="#bdbdbd"
      blurOnSubmit
      {...rest}
    />
  );
}

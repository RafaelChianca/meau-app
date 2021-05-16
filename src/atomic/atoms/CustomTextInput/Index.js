import React from 'react';
import { Input, ErrorText } from './styles';

export default function CustomTextInput({ error, ...rest }) {
  return (
    <>
      <Input
        scrollEnabled={false}
        placeholderTextColor="#bdbdbd"
        blurOnSubmit
        error={error}
        {...rest}
      />
      {error &&
        <ErrorText>{error}</ErrorText>
      }
    </>
  );
}

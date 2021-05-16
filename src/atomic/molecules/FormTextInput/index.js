import React from 'react';
import { View } from 'react-native';
import CustomTextInput from '../../atoms/CustomTextInput';
import InputLabel from '../../atoms/InputLabel';

export default function FormTextInput({ label, error, containerStyle, ...rest }) {
  return (
    <View style={containerStyle}>
      {label &&
        <InputLabel style={{marginBottom: 5}}>{label}</InputLabel>
      }
      <CustomTextInput error={error} {...rest}/>
    </View>
  );
}

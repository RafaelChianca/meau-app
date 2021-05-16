import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Button, Label } from './styles';

export default function CustomButton({ label, labelStyle, loading, ...rest }) {
  return (
    <Button {...rest}>
      {loading
        ? <ActivityIndicator size='small' color='white' />
        : <Label style={labelStyle}>{label}</Label>
      }
    </Button>
  );
}

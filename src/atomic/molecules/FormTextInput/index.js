import React from 'react';
import CustomTextInput from '../../atoms/CustomTextInput/Index';
import InputLabel from '../../atoms/InputLabel/Index';

export default function FormTextInput({ label, ...rest }) {
  return (
    <>
      {label &&
        <InputLabel style={{marginBottom: 5}}>{label}</InputLabel>
      }
      <CustomTextInput placeholder="testssse" {...rest}/>
    </>
  );
}

import React from 'react';
import CustomTextInput from '../../atoms/CustomTextInput/index';
import InputLabel from '../../atoms/InputLabel/index';

export default function FormTextInput({ label, ...rest }) {
  return (
    <>
      {label &&
        <InputLabel style={{marginBottom: 5}}>{label}</InputLabel>
      }
      <CustomTextInput placeholder="Placeholder" {...rest}/>
    </>
  );
}

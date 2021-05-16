import React from 'react';
import InputLabel from '../../atoms/InputLabel';
import { Container, SelectContainer, LabelContainer, ErrorText } from './styles';

export default function FormSelect({ label, children, error, ...rest }) {

  return (
    <Container {...rest}>
      {label &&
        <LabelContainer>
          <InputLabel>{label}</InputLabel>
          {error &&
            <ErrorText>{error}</ErrorText>
          }
        </LabelContainer>
      }
      <SelectContainer>
        {children}
      </SelectContainer>
    </Container>
  );
}

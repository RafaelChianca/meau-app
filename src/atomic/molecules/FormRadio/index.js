import React from 'react';
import InputLabel from '../../atoms/InputLabel';
import { Container, LabelContainer, ErrorText, RadioContainer } from './styles';

export default function FormRadio({ label, children, error, ...rest }) {

  return (
    <Container {...rest}>
      <LabelContainer>
        <InputLabel>{label}</InputLabel>
        {error &&
          <ErrorText>{error}</ErrorText>
        }
      </LabelContainer>
      <RadioContainer>
        {children}
      </RadioContainer>
    </Container>
  );
}

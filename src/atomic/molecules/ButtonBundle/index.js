import React from 'react';
import { Text } from 'react-native';
import CustomButton from '../../atoms/CustomButton';
import { MoleculeContainer } from './styles';

export default function ButtonBundle() {
  return (
    <MoleculeContainer>
      <Text>This (yellow) is a molecule containing 3 button atoms</Text>
      <CustomButton label="First button" style={{ marginTop: 20, marginBottom: 20 }} />
      <CustomButton label="Second button" style={{ marginBottom: 20 }} />
      <CustomButton label="Third button" style={{ marginBottom: 20 }} />
    </MoleculeContainer>
  );
}

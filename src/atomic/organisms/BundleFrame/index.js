import React from 'react';
import { Text } from 'react-native';
import ButtonBundle from '../../molecules/ButtonBundle';
import { OrganismContainer } from './styles';

export default function BundleFrame() {
  return (
    <OrganismContainer>
      <Text>This (red) is a organism made of a molecule (yellow) and atoms (blue)</Text>
      <ButtonBundle />
    </OrganismContainer>
  );
}

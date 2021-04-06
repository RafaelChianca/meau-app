import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {} from './styles';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import AdoptDetails from '../../atomic/organisms/AdoptionDetails';

export default function PetsDetails({... rest}) {
    return(
        <AdoptDetails {...rest}/>
    );
}
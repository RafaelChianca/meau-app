import { DrawerContentScrollView } from '@react-navigation/drawer';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import CustomButton from '../../atoms/CustomButton';

export const Drawer = styled.View`
    background-color: #f7f7f7;
    flex: 1;
    justify-content: space-between;
`;

export const ContentContainer = styled(ScrollView)`
    flex-grow: 1;
    flex: 1;
`;

export const LogoutButton = styled(CustomButton)`
    background-color: #88c9bf;
    width: 100%;
    border-radius: 0px;
`;

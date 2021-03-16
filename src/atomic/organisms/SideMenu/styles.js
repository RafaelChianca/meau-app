import { DrawerContentScrollView } from '@react-navigation/drawer';
import styled from 'styled-components/native';
import CustomButton from '../../atoms/CustomButton';

export const Drawer = styled(DrawerContentScrollView)`
    background-color: #f7f7f7;
`;

export const LogoutButton = styled(CustomButton)`
    background-color: #88c9bf;
    width: 100%;
    border-radius: 0px;
`;

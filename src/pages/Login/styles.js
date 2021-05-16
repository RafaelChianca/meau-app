import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: white;
`;

export const Header = styled.View`
    background-color: #cfe9e5;
    width: 100%;
    height: 56px;
    flex-direction: row;
    align-items: center;
`;

export const FormContainer = styled.View`
    flex: 1;
    padding-left: 28px;
    padding-right: 28px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #434343;
    margin-left: 32px;

`;

export const Label = styled.Text`
    color: #88c9bf;
    font-size: 14px;
    text-transform: uppercase;
    margin-top: 28px;
    margin-left: 28px;
`;
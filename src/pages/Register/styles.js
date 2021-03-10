import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: white;
    margin: 0;
    padding: 0;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #434343;
    margin-left: 32px;

`;

export const Info = styled.View`
    display: flex;
    width: 328px;
    height: 80px;
    background-color: #cfe9e5;
    border-radius: 4px;
    margin-top: 16px;
    justify-content: center;
    align-self: center;

`;

export const Label = styled.Text`
    color: #88c9bf;
    font-size: 14px;
    text-transform: uppercase;
    margin-top: 28px; 
    margin-left: 28px;
`;

export const Foto = styled.View`
    display: flex;
    width: 128px;
    height: 128px;
    background-color: #e6e7e7;
    border-radius: 2px;
    margin-top: 32px;
    justify-content: center;
    align-self: center;
    align-items: center;
`;


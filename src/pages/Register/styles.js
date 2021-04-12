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
    width: 328px;
    min-height: 80px;
    background-color: #cfe9e5;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 10px;

`;

export const Label = styled.Text`
    color: #88c9bf;
    font-size: 14px;
    text-transform: uppercase;
    margin-top: 28px; 
    margin-left: 28px;
`;

export const PictureContainer = styled.View`
    height: 128px;
    width: 100%;
    margin-top: 32px;
    justify-content: center;
    align-self: center;
    align-items: center;
    flex-direction: row;
`;

export const ProfilePicture = styled.Image`
    height: 128px;
    width: 128px;
    background-color: black;
    justify-content: center;
    align-self: center;
    align-items: center;
`;

export const CancelButton = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    background-color: red;
    z-index: 100;
    border-radius: 500px;
    align-self: flex-start;
    margin-left: -15px;
    margin-top: -15px;
    align-items: center;
    justify-content: center;
`;

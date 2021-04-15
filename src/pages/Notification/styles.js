import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: white;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #434343;
    margin-left: 32px;
`;

export const ContentContainer = styled.View`
    flex: 1;
`;

export const Label = styled.Text`
    color: #757575;
    font-size: 14px;
    align-self: center;
`;

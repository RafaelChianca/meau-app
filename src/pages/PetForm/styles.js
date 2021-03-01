import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: white;
`;

export const FormLabel = styled.Text`
    font-weight: bold;
    color: #434343;
    font-size: 16px;
    margin-bottom: 24px;
`;
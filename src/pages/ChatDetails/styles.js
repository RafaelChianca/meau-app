import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: #f1f2f2;
`;

export const CustomInput = styled.TextInput`
    background-color: white;
    margin-bottom: 12px;
    margin-left: 16px;
    width: 268px;
    height: 56px;
    padding: 10px;
`;

export const ContentContainer = styled.View`
    flex: 1;
`;

export const Group = styled.View`
    flex-direction: row;
    /* align-items: center;
    align-content: center; */
`;

export const CustomText = styled.Text`
    background-color: white;
    margin-bottom: 12px;
    margin-left: 16px;
    width: 268px;
    padding: 10px;
    min-height: 56px;
`;

export const Send = styled.TouchableOpacity`
    height: 44px;
    width: 44px;
    border-radius: 500px;
    background-color: #88c9bf;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

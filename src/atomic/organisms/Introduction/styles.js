import styled from 'styled-components/native';
import CustomButton from '../../atoms/CustomButton';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding-left: 48px;
    padding-right: 48px;
`;

export const HelloText = styled.Text`
    font-size: 72px;
    color: #ffd358;
    margin-bottom: 52px;
`;

export const IntroText = styled.Text`
    font-size: 16px;
    color: #757575;
    text-align: center;
    width: 80%;
    margin-bottom: 48px;
`;

export const OptionButton = styled(CustomButton)`
    background-color: #ffd358;
    width: 232px;
    border-radius: 4px;
    margin-bottom: 12px;
`;

export const LogoContainer = styled.Image`
    height: 44px;
    width: 122px;
    margin-top: auto;
    margin-bottom: 32px;
`;

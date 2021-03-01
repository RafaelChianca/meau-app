import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    min-height: 24px;
    min-width: 100px;
    flex-direction: row;
    margin-right: 20px;
`;

export const Radio = styled.View`
    height: 24px;
    width: 24px;
    border-radius: 500px;
    justify-content: center;
    align-items: center;
    border-width: 2px;
    border-color: #757575;
`;

export const RadioLabel = styled.Text`
    font-size: 14px;
    border-color: #757575;
    margin-left: 5px;
`;

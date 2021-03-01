import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    height: 24px;
    flex-direction: row;
    margin-right: 20px;
`;

export const Radio = styled.View`
    height: 24px;
    width: 24px;
    justify-content: center;
    align-items: center;
    border-width: 2px;
    border-color: ${props => props.disabled ? '#bdbdbd' : '#757575'};
    border-radius: 2px;
`;

export const RadioLabel = styled.Text`
    font-size: 14px;
    color: ${props => props.disabled ? '#bdbdbd' : '#757575'};
    margin-left: 5px;
`;

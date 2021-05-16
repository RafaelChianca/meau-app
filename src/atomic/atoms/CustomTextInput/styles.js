import styled from 'styled-components/native';

export const Input = styled.TextInput`
    font-size: 14px;
    border-bottom-width: 1px;
    border-color: ${props => props.error ? 'red' : '#bdbdbd'};
    color: #bdbdbd;
    height: 40px;
`;


export const ErrorText = styled.Text`
    color: red;
    font-size: 10px;
`;

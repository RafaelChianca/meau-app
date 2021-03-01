import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    height: 40px;
    min-width: 96px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    background-color: ${props => props.selected ? '#ffd358' : '#f1f2f2'};
`;

export const Label = styled.Text`
   color: ${props => props.disabled ? '#bdbdbd' : '#434343'};
   font-size: 12px;
   text-transform: uppercase;
`;
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    height: 40px;
    width: 232px;
    background-color: #ffd358;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    align-self: center;
    opacity: ${props => props.disabled ? 0.5 : 1};
`;

export const Label = styled.Text`
   color: #434343;
   font-size: 12px;
   text-transform: uppercase;
`;
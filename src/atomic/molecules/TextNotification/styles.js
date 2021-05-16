import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100px;
    width: 100%;
    overflow: hidden;
    elevation: 6;
    margin-bottom: 8px;
    border-radius: 8px;
    flex-direction: row;
    background-color: ${({headerColor}) => `${headerColor}`};
    padding: 10px;
`;

export const InfoText = styled.Text`
   color: rgb(67, 67, 67);
   font-size: 16px;
   font-weight: 600;
`;

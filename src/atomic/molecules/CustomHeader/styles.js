import styled from 'styled-components/native';

export const Container = styled.View`
    height: 56px;
    width: 100%;
    flex-direction: row;
    z-index: 10;
    background-color: #ffd358;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
`;

export const StartContainer = styled.View`
    height: 100%;
    width: 20%;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    justify-content: center;
`;

export const MiddleContainer = styled.View`
    height: 100%;
    width: 60%;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.Text`
   color: #434343;
   font-size: 20px;
   text-transform: capitalize;
   font-weight: bold;
`;

export const EndContainer = styled.View`
    height: 100%;
    width: 26%;
    justify-content: flex-end;
    align-items: flex-end;
`;


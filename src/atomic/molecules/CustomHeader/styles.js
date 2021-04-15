import styled from 'styled-components/native';

export const Container = styled.View`
    height: 56px;
    width: 100%;
    flex-direction: row;
    z-index: 10;
    background-color: white;
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
`;

export const Label = styled.Text`
   color: #434343;
   font-size: 20px;
   text-transform: capitalize;
   font-weight: 600;
`;

export const EndContainer = styled.View`
    height: 100%;
    width: 20%;
    justify-content: center;
    align-items: flex-end;
`;

export const NotificationContainer = styled.View`
    height: 15px;
    width: 15px;
    border-radius: 15px;
    background-color: red;
    position: absolute;
    right: 25px;
    top: 10px;
    z-index: 100;
    align-items: center;
    justify-content: center;
`;

export const NotificationNumber = styled.Text`
    font-size: 10px;
    color: white;
    font-weight: bold;
`;
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: white;
`;

export const PictureContainer = styled.View`
    height: 128px;
    width: 100%;
    margin-top: 32px;
    justify-content: center;
    align-self: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
    /* padding: 0px 24px 0px 24px; */
`;

export const PetPicture = styled.Image`
    height: 128px;
    width: 100%;
    background-color: black;
    justify-content: center;
    align-self: center;
    align-items: center;
`;

export const CancelButton = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    background-color: red;
    z-index: 100;
    border-radius: 500px;
    align-self: flex-start;
    margin-left: -15px;
    margin-top: -15px;
    align-items: center;
    justify-content: center;
`;
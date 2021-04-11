import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    background-color: #fafafa;
`;

export const PetImage = styled.Image`
    height: 184px;
    background-color: #bbbbbb;
`;

export const FavButton = styled.TouchableOpacity`
    background-color: #fafafa;
    border: 0.5px solid #ccc;
    border-radius: 50px;
    height: 76px;
    width: 76px;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin-right: 15px;
    margin-top: -38px;

`;

export const TextGroup = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const Titulo = styled.Text`
    text-transform: uppercase;
    color: #f7a800;
    font-size: 12px;
    margin-bottom: 8px;
`;

export const Group = styled.View`
    flex: 1;
    flex-direction: row;
    margin-left: 30px;
    margin-bottom: 16px;
`;

export const Linha = styled.View`
    border: 0.5px solid #e0e0e0;
    margin-bottom: 16px;
    width: 328px;
    margin-left: 15px;
`;



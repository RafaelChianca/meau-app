import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    min-height: 270px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    elevation: 6;
    margin-bottom: 8px;
`;

export const HeaderContainer = styled.View`
    height: 40px;
    width: 100%;
    background-color: ${({headerColor}) => headerColor ? headerColor : '#fee29b'};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 12px;
    padding-right: 12px;
`;

export const PetName = styled.Text`
   color: rgb(67, 67, 67);
   font-size: 16px;
   text-transform: capitalize;
   font-weight: 600;
`;

export const PetImage = styled.Image`
    height: 183px;
    background-color: #bbbbbb;
`;

export const InfoContainer = styled.View`
    flex: 1;
    background-color: white;
    flex-direction: row;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 12px;
    padding-right: 12px;
    flex-wrap: wrap;
    justify-content: center;
`;

export const PetInfo = styled.Text`
   color: #434343;
   font-size: 12px;
   text-transform: uppercase;
   margin-right: 10px;
`;

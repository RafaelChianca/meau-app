import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100px;
    width: 100%;
    overflow: hidden;
    elevation: 6;
    margin-bottom: 8px;
    border-radius: 8px;
    flex-direction: row;
`;

export const TitleContainer = styled.View`
    height: 100%;
    width: 60%;
    background-color: ${({headerColor}) => `${headerColor}`};
    flex-direction: row;
    padding: 10px;
`;

export const InfoText = styled.Text`
   color: rgb(67, 67, 67);
   font-size: 16px;
   font-weight: 600;
`;

export const OptionsContainer = styled.View`
    flex-direction: row;
    flex: 1;
`;

export const OptionButton = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
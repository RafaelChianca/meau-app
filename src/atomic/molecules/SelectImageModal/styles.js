import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    justify-content: center;
`;

export const Body = styled.View`
    margin: 24px;
    align-items: center;
    z-index: 10;
    background-color: white;
    border-radius: 8px;
`;

export const Background = styled.TouchableOpacity`
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.8);
    z-index: -2;
`;

export const OptionButton = styled.TouchableOpacity`
   width: 85%;
   padding: 15px;
   margin-top:15px;
   border-bottom-width: 1px;

`;
export const OptionText = styled.Text`
    font-style: normal;
    font-size: 14px;
    text-align: center;
`;

export const Title = styled.Text`
    font-style: normal;
    font-size: 14px;
`;

export const Header = styled.View`
    height: 60px;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    align-items: center;
    justify-content: center;
`;

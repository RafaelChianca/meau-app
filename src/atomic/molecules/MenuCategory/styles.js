import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const Header = styled.TouchableOpacity`
    height: 48px;
    width: 100%;
    flex-direction: row;
    background-color: #e6e7e8;
    padding: 16px;
    align-items: center;
    justify-content: space-between;
`;

export const BegginingContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const IconContainer = styled.View`
    height: 24px;
    width: 24px;
    justify-content: center;
    align-items: center;
    margin-right: 32px;
`;

export const ChildrenContainer = styled.View`
    padding-left: 48px;
`;

export const Label = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #434343;
    text-transform: capitalize;
`;
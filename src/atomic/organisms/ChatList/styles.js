import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding-left: 16px;
    padding-right: 16px;
`;

export const Group = styled.View`
    flex: 1;
`;

export const Card = styled.TouchableOpacity`
    background-color: white;
`;

export const HiddenContainer = styled.View`
    width: 100%;
    align-items: flex-end;
`;

export const RemoveButton = styled.TouchableOpacity`
    background-color: red;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 100%;
`;
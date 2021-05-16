import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    padding-left: 8px;
    padding-right: 8px;
`;

export const ClearButton = styled.TouchableOpacity`
    height: 40px;
`;

export const ClearText = styled.Text`
    font-size: 12px;
    text-decoration-line: underline;
    margin-bottom: 20px;
    align-self: flex-end;
`;

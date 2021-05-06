import React from 'react';
import { StatusBar } from 'react-native';
import { Container, ContentContainer } from './styles';
import InputLabel from '../../atoms/InputLabel';
import ProfilePicture from '../../atoms/ProfilePicture';
import { InfoText } from '../../molecules/TextNotification/styles';
import { Group, Card } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function ChatList({ url, ...rest }) {
    const navigation = useNavigation();

    const openChat = () => {
        navigation.navigate('ChatDetails');
    }

    return(
        <Container {...rest}>
            <Card onPress={openChat}>
                <Group style={{flexDirection: 'row', borderColor:'#bdbdbd', borderBottomWidth:1, marginTop:20}}>
                    <ProfilePicture style={{marginRight: 4, marginBottom: 16, marginTop:-4, height: 48, width: 48}} url={url}/>
                    <Group style={{flexDirection: 'column'}}>
                        <InputLabel style={{color: '#589b9b', fontSize: 12}}>Nome da pessoa</InputLabel>
                        <InfoText style={{color: '#757575', fontSize: 14}} numberOfLines={1}>última mensagem</InfoText>
                    </Group>
                    <InfoText style={{color: '#434343', fontSize: 14}}>12:00</InfoText>
                </Group>
            </Card>
        </Container>
    );
}
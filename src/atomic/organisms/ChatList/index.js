import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import InputLabel from '../../atoms/InputLabel';
import ProfilePicture from '../../atoms/ProfilePicture';
import { InfoText } from '../../molecules/TextNotification/styles';
import { Container, Group, Card, HiddenContainer, RemoveButton } from './styles';
import { deleteChatRequested, listChatsRequested } from '../../../store/actions/chat';

export default function ChatList({...rest }) {
    const { user } = useSelector(state => state.profile);
    const { chatList } = useSelector(state => state.chat);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listChatsRequested(user.id));
    }, [])

    const openChat = (chatItem) => {
        navigation.navigate('ChatDetails', {id: chatItem.id, receiver: renderUserName(chatItem), item: chatItem});
    }

    const deleteChat = (chatID) => {
        dispatch(deleteChatRequested(chatID));
    }

    const renderUserName = (chatItem) => {
        let index = chatItem.users.findIndex(item => item.id === user.id);
        
        if (index === -1) {
            return 'Usuário não encontrado'
        } else {
            return chatItem.users[index === 1 ? 0 : 1].name
        }
    }

    const returnImageURL = (chatItem) => {
        let index = chatItem.users.findIndex(item => item.id === user.id);
        
        if (index === -1) {
            return ''
        } else {
            return chatItem.users[index === 1 ? 0 : 1].imageURL
        }
    }

    const renderTime = (timeStamp) => {
        if (timeStamp === null || timeStamp === undefined) {
            return ''
        }

        const date = timeStamp.toDate();

        const datevalues = [
            date.getFullYear(),
            date.getMonth()+1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
        ];

        return datevalues[2] + '/' + datevalues[1] + '/' + datevalues[0]
    }

    return(
        <Container {...rest}>
            <SwipeListView
                data={chatList}
                renderItem={(data) => (
                    <Card activeOpacity={0.9} onPress={() => openChat(data?.item)}>
                        <Group style={{flexDirection: 'row', borderColor:'#bdbdbd', borderBottomWidth:1, marginTop:20}}>
                            <ProfilePicture
                                style={{
                                    marginRight: 4,
                                    marginBottom: 16,
                                    marginTop:-4,
                                    height: 48,
                                    width: 48
                                }}
                                iconSize={40}
                                url={returnImageURL(data?.item)}
                            />
                            <Group style={{flexDirection: 'column'}}>
                                <InputLabel style={{color: '#589b9b', fontSize: 12}}>
                                    {renderUserName(data?.item)}
                                </InputLabel>
                                {data && data.item && data.item.lastMessage && data.item.lastMessage.text &&
                                    <InfoText style={{color: '#757575', fontSize: 14}} numberOfLines={1}>{data.item.lastMessage.text}</InfoText>
                                }
                            </Group>
                            <InfoText style={{color: '#434343', fontSize: 14}}>
                                {data && data.item && data.item.lastMessage && data.item.lastMessage.createdAt &&
                                    renderTime(data?.item?.lastMessage?.createdAt)
                                }
                            </InfoText>
                        </Group>
                    </Card>
                )}
                // renderHiddenItem={(data) => (
                //     <HiddenContainer>
                //         <RemoveButton onPress={() => {deleteChat(data.id)}}>
                //         <Icon
                //             name='close'
                //             color='white'
                //             size={40}
                //         />
                //         </RemoveButton>
                //     </HiddenContainer>
                // )}
                // rightOpenValue={-75}
                disableRightSwipe
            />
        </Container>
    );
}
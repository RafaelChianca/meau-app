import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Container, ContentContainer } from './styles';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {GiftedChat, Bubble, Send, InputToolbar} from 'react-native-gifted-chat';
import * as firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { updateChatRequested } from '../../store/actions/chat';

export default function ChatDetails({route}) {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.profile);
    const [messages, setMessages] =  useState([]);
    const [lastMessage, setLastMessage] =  useState(null);

    useEffect(() => {
        const db =  firebase.firestore();
        
        db.collection('Messages')
        .where('chatID', '==', route.params.id)
        .orderBy('createdAt', 'desc')
        .onSnapshot(function(doc) {
            let receivedMessages = [];
            doc.docs.map(element => {
                let elementInfo = element.data();
                
                receivedMessages.push({
                    ...elementInfo,
                    _id: element.id,
                    createdAt: elementInfo.createdAt.toDate(),
                });
            });
            setLastMessage(receivedMessages[0]);
            setMessages(GiftedChat.append(messages, receivedMessages));
        });
    }, []);

    useEffect(() => {
        return () => {
            if (lastMessage && Object.keys(lastMessage).length > 0) {
                if (route.params.item && !route.params.item.lastMessage) {
                    route.params.item.lastMessage = lastMessage;
                } else {
                    route.params.item.lastMessage.text = lastMessage?.text;
                }
                dispatch(updateChatRequested(route.params.id, lastMessage));
            }
        }
    }, [lastMessage])

    function onSend(messages) {
        if (messages && messages.length >= 1) {
            firebase.firestore()
            .collection('Messages')
            .add({
                ...messages[0],
                chatID: route.params.id
            });
        }
    }

    function renderBubble(bubbleProps) {
        return (
            <ContentContainer>
                <Bubble 
                {...bubbleProps}
                wrapperStyle={{
                    right: 
                    {
                        backgroundColor: '#cfe9e5',
                        marginBottom: 12,
                        marginRight: 16,
                        width: 268,
                        padding: 10,
                        minHeight: 56,
                        }, 
                    left: 
                    {
                        backgroundColor: 'white',
                        marginBottom: 12,
                        marginLeft: 16,
                        width: 268,
                        padding: 10,
                        minHeight: 56
                    },
                }}
                textProps={{
                    style: {
                      color:'#434343',
                    },
                }}
                timeTextStyle={{
                    right: {
                        color:'#434343',
                    },
                    left: {
                        color:'#434343',
                    },
                }}
                />
            </ContentContainer>
        );
        
    }

    function renderSend(props) {
        return (
          <Send {...props} >
            <Icon name='send' color='#88c9bf' size={24} />
          </Send>
        );
    }

    function customtInputToolbar(props) {
        return (
          <InputToolbar
            {...props}
            containerStyle={{
              backgroundColor: "white",
              padding: 8,
            }}
          />
        );
    };

    return(
        <Container>
            <StatusBar
                animated
                backgroundColor={'#589b9b'}
                barStyle={'light-content'}
            />
            <CustomHeader
                label={route.params.receiver}
                leftIcon="back"
                rightIcon="opt"
                style={{backgroundColor: '#88c9bf'}}
            />
            <GiftedChat
                messages={messages}
                dateFormat={'DD/MM/YYYY'}
                timeFormat={'HH:mm'}
                renderBubble={renderBubble}
                onSend={messages => onSend(messages)}
                user={{
                    _id: user.id,
                    avatar: user.imageURL
                }}
                alwaysShowSend
                renderSend={renderSend}
                renderInputToolbar={customtInputToolbar}
                renderAvatar={() => null}
                showAvatarForEveryMessage={true}
            />
        </Container>
    );
}
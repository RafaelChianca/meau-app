import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Container, ContentContainer } from './styles';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {GiftedChat, Bubble, Send, InputToolbar} from 'react-native-gifted-chat';
import * as firebase from 'firebase';
import { useSelector } from 'react-redux';

export default function ChatDetails() {

    const { user } = useSelector(state => state.profile);
    const [messages, setMessages] =  useState([]);

    useEffect(() => {

        const db =  firebase.firestore();
        
        db.collection('Messages')
        
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

            setMessages(GiftedChat.append(messages, receivedMessages));
        });
        
    }, []);

    function onSend(messages) {
        if (messages && messages.length >= 1) {
            firebase.firestore()
            .collection('Messages')
            .add(messages[0]);
        }
    }

    function  renderBubble(bubbleProps) {
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
                label='Nome da pessoa'
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
import React, { useState, useEffect} from 'react';
import { StatusBar } from 'react-native';
import { Container } from './styles';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
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
            <Bubble {...bubbleProps}/>
        );
        
    }

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
                timeFormat={'h:mm'}
                renderBubble={renderBubble}
                onSend={messages => onSend(messages)}
                user={{
                    _id: user.id,
                    avatar: user.imageURL
                }}
            />
        </Container>
    );
}
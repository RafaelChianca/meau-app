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
                receivedMessages.push({
                    _id: element.id,
                    ...element.data(),        
                });  
            });       
            setMessages(GiftedChat.append(messages, receivedMessages));
        });
        
    }, []);

    function onSend(messages) {
        console.log('mensagens ---------', messages[0])

        firebase.firestore()
        .collection('Messages')
        .add(messages[0]);
    }

    function  renderBubble(bubbles) {

        console.log('props bubble --------', bubbles)
        return (      
            <Bubble {...bubbles}/>
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
            {/* <ContentContainer>
                <CustomText>blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</CustomText>
            </ContentContainer>
            <Group>
                <CustomInput style={{marginRight: 16}} />
                <Send style={{marginTop: 8}}>
                <Icon name='send' color='white' size={24}/>
                </Send>
            </Group> */}
            <GiftedChat
                messages={messages}
                dateFormat={'DD-MM-YYYY'}
                timeFormat={'hh:mm'}
                renderBubble={renderBubble}
                onSend={messages => onSend(messages)}
                user={user}
            />
        </Container>
    );
}
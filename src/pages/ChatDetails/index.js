import React, { useState, useEffect} from 'react';
import { StatusBar } from 'react-native';
import { Container, ContentContainer, CustomInput, CustomText, Send, Group } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import CustomButton from '../../atomic/atoms/CustomButton';
import CustomTextInput from '../../atomic/atoms/CustomTextInput';
import {GiftedChat, Actions, Bubble} from 'react-native-gifted-chat';
import * as firebase from 'firebase';
import uuid from 'uuid';

export default function ChatDetails() {

    const [user, setUser] =  useState(firebase.auth().currentUser);
    const [messages, setMessages] =  useState([]);

    useEffect(() => {

        console.log(user);
        
        const db =  firebase.firestore();
        
        db.collection('Messages')
        
        .orderBy('createdAt', 'desc')
        
        .onSnapshot(function(doc) {    
            let receivedMessages = [];
            doc.docs.map(doc => {
                receivedMessages.push({
                    _id: doc.id,
                    ...doc.data(),        
                });  
            });       
            setMessages(GiftedChat.append(messages, receivedMessages));
        });
        
    }, [user]);

    function  onSend([messages]) {

        firebase.firestore()
        .collection('Messages')
        .add(messages);
        
    }

    function  renderBubble(props) {

        return (      
            <>
            <Bubble {...props}/>
            </>
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
                timeFormat={'h:mm'}
                renderBubble={renderBubble}
                onSend={messages =>  onSend(messages)}
                user={user}
            />
        </Container>
    );
}
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RectButton } from 'react-native-gesture-handler';

export default class Login extends React.Component{
    constructor(){
        super();
    
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.fundo}>
                <View style={styles.barraSuperior} />
                <View style={styles.header}>
                    <Icon name='bars' color='#434343' size={24} style={{marginLeft: 16}}/>
                    <Text style={{marginLeft:30, fontSize:18}}>Login</Text>
                </View>
                <TextInput style={[styles.inputs, {marginTop: 64}]}
                value='Nome de usuário'
                />
                <TextInput style={[styles.inputs, {marginTop: 20}]}
                value='Senha'
                />
                <RectButton style={styles.botaoEntrar}>
                    <Text>ENTRAR</Text>
                </RectButton>
            </View>
            );
    }
}
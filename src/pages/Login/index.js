import React from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RectButton } from 'react-native-gesture-handler';

export default class Login extends React.Component{
    constructor(){
        super();
    
        this.state = {
            nome: '',
            senha: '',
        }
    }

    render(){
        return(
            <View style={styles.fundo}>
                <View style={styles.barraSuperior} />
                <View style={styles.header}>
                    <TouchableWithoutFeedback>
                        <Icon name='bars' color='#434343' size={24} style={{marginLeft: 16}}/> 
                    </TouchableWithoutFeedback>
                    <Text style={{marginLeft:30, fontSize:18}}>Login</Text>
                </View>
                <TextInput style={[styles.inputs, {marginTop: 64}]}
                value={this.state.nome}
                onChangeText={(nome) => this.setState({nome})}
                placeholder={'Nome de Usuário'}
                placeholderTextColor={'#bdbdbd'}
                />
                <TextInput style={[styles.inputs, {marginTop: 20}]}
                value={this.state.senha}
                onChangeText={(senha) => this.setState({senha})}
                placeholder={'Senha'}
                placeholderTextColor={'#bdbdbd'}
                />
                <RectButton style={styles.botaoEntrar}>
                    <Text>ENTRAR</Text>
                </RectButton>
            </View>
            );
    }
}
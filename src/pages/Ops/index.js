import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RectButton } from 'react-native-gesture-handler';

export default class Ops extends React.Component{
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
                    <TouchableWithoutFeedback>
                        <Icon name='arrow-left' color='#434343' size={24} style={{marginLeft: 16}}/>
                    </TouchableWithoutFeedback>
                    <Text style={{marginLeft:30, fontSize:18}}>Cadastro</Text>
                </View>
                <Text style={styles.textoOps}>Ops!</Text>
                <Text style={styles.texto}>Você não pode realizar esta ação sem</Text>
                <Text style={[styles.texto]}>possuir cadastro.</Text>
                <RectButton style={styles.botao}>
                    <Text>FAZER CADASTRO</Text>
                </RectButton>
                <Text style={[styles.texto, {marginTop: 44}]}>Já possui cadastro?</Text>
                <RectButton style={styles.botao}>
                    <Text>FAZER LOGIN</Text>
                </RectButton>
            </View>
            );
    }
}
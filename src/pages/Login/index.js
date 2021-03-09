import React, { useState } from 'react';
import {TouchableWithoutFeedback, StatusBar} from 'react-native';
import { Header, Container, Title} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormTextInput from '../../atomic/molecules/FormTextInput';
import CustomButton from '../../atomic/atoms/CustomButton';
import {signIn} from '../../api/firebaseMethods';

export default function Register() {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const handlePress = () => {
        if (!nome) {
          Alert.alert('Nome field is required.');
        }
    
        if (!senha) {
          Alert.alert('Senha field is required.');
        }
    
        signIn(nome, senha);
        setNome('');
        setSenha('');
      };

    return(
        <Container>
            <StatusBar
                animated
                backgroundColor="#88c9bf"
                barStyle={"light-content"}
            />

            <Header>
                <TouchableWithoutFeedback>
                    <Icon name='bars' color='#434343' size={24} style={{marginLeft: 16}}/> 
                </TouchableWithoutFeedback>
                <Title>Cadastro Pessoal</Title>
            </Header>

            <FormTextInput
                placeholder="Nome completo"
                placeholderTextColor="#bdbdbd"
                value={nome}
                onChangeText={setNome}
                style={{marginTop: 64, color:"#434343", marginLeft: 28, marginRight: 16, fontSize: 17}}
            />

            <FormTextInput
                placeholder="Senha"
                placeholderTextColor="#bdbdbd"
                value={senha}
                onChangeText={setSenha}
                style={{marginTop: 20, color:"#434343", marginLeft: 28, marginRight: 16, fontSize: 17}}
            />
            <CustomButton
                label="ENTRAR"
                style={{backgroundColor: '#88c9bf',
                borderRadius: 2,
                width:232,
                height:40,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 52,}}
                onPress={handlePress}
            />
        </Container>
    );
}
import React, { useState } from 'react';
import {TouchableWithoutFeedback, StatusBar, Alert} from 'react-native';
import { Header, Container, Title} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormTextInput from '../../atomic/molecules/FormTextInput';
import CustomButton from '../../atomic/atoms/CustomButton';
import {signIn} from '../../api/firebaseMethods';


export default function Register() {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const handlePress = async () => {
        if (!nome) {
          Alert.alert('Por favor, digite seu nome de usuário');
        }
    
        if (!senha) {
          Alert.alert('Por favor, digite sua senha');
        }
        
        await signIn(nome, senha);
        Alert.alert('Login realizado com sucesso');
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
                <Title>Login</Title>
            </Header>

            <FormTextInput
                placeholder="Nome de usuário"
                placeholderTextColor="#bdbdbd"
                value={nome}
                onChangeText={(nome) => setNome(nome)}
                style={{marginTop: 64, color:"#434343", marginLeft: 28, marginRight: 16, fontSize: 17}}
            />

            <FormTextInput
                placeholder="Senha"
                placeholderTextColor="#bdbdbd"
                value={senha}
                onChangeText={(senha) => setSenha(senha)}
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
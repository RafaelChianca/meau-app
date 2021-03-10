import React, { useState } from 'react';
import {TouchableWithoutFeedback, StatusBar, Alert} from 'react-native';
import { Header, Container, Title} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormTextInput from '../../atomic/molecules/FormTextInput';
import CustomButton from '../../atomic/atoms/CustomButton';
import {signIn} from '../../api/firebaseMethods';


export default function Register() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handlePress() {
        if (!name) {
          Alert.alert('Por favor, digite seu name de usuário');
        }
    
        if (!password) {
          Alert.alert('Por favor, digite sua password');
        }
    
        signIn(name, password);

        Alert.alert('Login realizado com sucesso');
        setName('');
        setPassword('');
    };

    return(
        <Container>
            <StatusBar
                animated
                backgroundColor={'#88c9bf'}
                barStyle={'light-content'}
            />
            <Header>
                <TouchableWithoutFeedback>
                    <Icon name={'bars'} color={'#434343'} size={24} style={{marginLeft: 16}}/> 
                </TouchableWithoutFeedback>
                <Title>Login</Title>
            </Header>
            <FormTextInput
                placeholder={'e-mail'}
                placeholderTextColor='#bdbdbd'
                value={name}
                onChangeText={(name) => setName(name)}
                style={{marginTop: 64, color:'#434343', marginLeft: 28, marginRight: 16, fontSize: 17}}
            />
            <FormTextInput
                placeholder='Senha'
                placeholderTextColor='#bdbdbd'
                value={password}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                style={{marginTop: 20, color:'#434343', marginLeft: 28, marginRight: 16, fontSize: 17}}
            />
            <CustomButton
                label='ENTRAR'
                style={{
                    backgroundColor: '#88c9bf',
                    borderRadius: 2,
                    width:232,
                    height:40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 52,
                }}
                onPress={handlePress}
            />
        </Container>
    );
}
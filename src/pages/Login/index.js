import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, StatusBar, Alert, Keyboard } from 'react-native';
import { Header, Container, Title } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormTextInput from '../../atomic/molecules/FormTextInput';
import CustomButton from '../../atomic/atoms/CustomButton';
import { signIn } from '../../services/firebaseMethods';
import { useNavigation } from '@react-navigation/native';


export default function Register() {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        return () => {
            setEmail('');
            setPassword('');
        }
    }, [])

    const handlePress = async () => {
        Keyboard.dismiss();

        if (email?.length === 0) {
          Alert.alert('Por favor, digite seu nome de usuário');
          setEmailError(true);
          return
        }
    
        if (password?.length === 0) {
          Alert.alert('Por favor, digite sua senha');
          setPasswordError(true);
          return
        }
    
        await signIn(email, password);
    };

    return(
        <Container>
            <StatusBar
                animated
                backgroundColor={'#88c9bf'}
                barStyle={'light-content'}
            />
            <Header>
                <Icon name={'bars'} color={'#434343'} size={24} style={{marginLeft: 16}} onPress={() => navigation.openDrawer()}/> 
                <Title>Login</Title>
            </Header>
            <FormTextInput
                placeholder="E-mail"
                placeholderTextColor='#bdbdbd'
                value={email}
                keyboardType="email-address"
                onChangeText={(email) => setEmail(email)}
                style={{marginTop: 64, color:'#434343', marginLeft: 28, marginRight: 16, fontSize: 17}}
            />
            <FormTextInput
                placeholder='Senha'
                placeholderTextColor='#bdbdbd'
                value={password}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                style={{marginTop: 20, color:'#434343', marginLeft: 28, marginRight: 16, fontSize: 17}}
                onSubmitEditing={handlePress}
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
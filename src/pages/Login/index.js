import React, { useEffect, useState } from 'react';
import { StatusBar, Keyboard } from 'react-native';
import { Header, Container, Title, FormContainer } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormTextInput from '../../atomic/molecules/FormTextInput';
import CustomButton from '../../atomic/atoms/CustomButton';
import { signIn } from '../../services/firebaseMethods';
import { useNavigation } from '@react-navigation/native';


export default function Register() {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);

    const navigation = useNavigation();

    useEffect(() => {
        return () => {
            setEmail('');
            setPassword('');
            setEmailError(null);
            setPasswordError(null);
        }
    }, [])

    const handlePress = async () => {
        Keyboard.dismiss();

        if (email?.length === 0) {
          setEmailError('Por favor, digite seu email');
        } else {
          setEmailError(null);
        }
    
        if (password?.length === 0) {
          setPasswordError('Por favor, digite sua senha');
          return
        } else {
          setPasswordError(null);
        }

        if (emailError || passwordError) return
    
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
            <FormContainer>
                <FormTextInput
                    placeholder="E-mail"
                    placeholderTextColor='#bdbdbd'
                    value={email}
                    error={emailError}
                    keyboardType="email-address"
                    onChangeText={(email) => setEmail(email)}
                    containerStyle={{marginTop: 64, color:'#434343'}}
                />
                <FormTextInput
                    placeholder='Senha'
                    placeholderTextColor='#bdbdbd'
                    error={passwordError}
                    value={password}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    containerStyle={{marginTop: 20, color:'#434343'}}
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
            </FormContainer>
        </Container>
    );
}
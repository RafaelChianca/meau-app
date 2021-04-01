import React, { useEffect, useState } from 'react';
import { StatusBar, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Container, FormContainer } from './styles';
import FormTextInput from '../../atomic/molecules/FormTextInput';
import CustomButton from '../../atomic/atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import { loginRequested } from '../../store/actions/profile';


export default function Register() {
    
    const loading = useSelector(state => state.profile.loading);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);

    const navigation = useNavigation();
    const dispatch = useDispatch();

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
    
        dispatch(loginRequested(email, password))
    };

    return(
        <Container>
            <StatusBar
                animated
                backgroundColor={'#88c9bf'}
                barStyle={'light-content'}
            />
            <CustomHeader label='Login' showLeftIcon={false} style={{backgroundColor: '#cfe9e5'}} />
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
                <CustomButton
                    label='Não possui conta? Cadastre-se aqui'
                    style={{
                        backgroundColor: 'transparent',
                        width: '100%',
                        height:40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 20,
                    }}
                    labelStyle={{color: '#88c9bf'}}
                    onPress={() => navigation.navigate('Register')}
                    loading={loading}
                />
            </FormContainer>
        </Container>
    );
}
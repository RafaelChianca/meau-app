import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, StatusBar, Text } from 'react-native';
import { Container, Info, Label } from './styles';
import FormTextInput from '../../atomic/molecules/FormTextInput';
import CustomButton from '../../atomic/atoms/CustomButton';
import ImageSelector from '../../atomic/molecules/ImageSelector';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import { createUserRequested } from '../../store/actions/profile';
import * as ImagePicker from '../../services/imageRelated';

export default function Register() {

    const dispatch = useDispatch();

    const loading = useSelector(state => state.profile.loading);

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState(''); 
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [telefone, setTelefone] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacao, setConfirmacao] = useState('');
    const [imagem, setImagem] = useState('');

    const pickImage = async () => {
        setImagem(await ImagePicker.pickImage());
    }

    const handlePress = () => {
        if (!nome) {
          Alert.alert('Preencha o campo do nome');
        } else if (!idade) {
          Alert.alert('Preencha o campo da idade');
        } else if (!email) {
            Alert.alert('Preencha o campo do email');
        } else if (!estado) {
            Alert.alert('Preencha o campo do estado');
        } else if (!cidade) {
            Alert.alert('Preencha o campo da cidade');
        } else if (!telefone) {
            Alert.alert('Preencha o campo do telefone');
        } else if (!usuario) {
            Alert.alert('Preencha o campo do usuario');
        } else if (!senha) {
          Alert.alert('Preencha o campo da senha');
        } else if (!confirmacao) {
          setSenha('');
          Alert.alert('Preencha o campo de confirmação da senha');
        } else if (senha !== confirmacao) {
          Alert.alert('Senhas diferentes');
        } else {
          dispatch(
            createUserRequested(
              nome,
              email,
              usuario,
              senha,
              idade,
              estado,
              cidade,
              telefone,
              imagem
            ))
        }
      };

    return(
        <Container>
            <StatusBar
                animated
                backgroundColor="#88c9bf"
                barStyle={"light-content"}
            />
            <CustomHeader label='Cadastro Pessoal' style={{backgroundColor: '#cfe9e5'}} />
            <ScrollView showsVerticalScrollIndicator={false} style={{flexGrow: 1, paddingBottom: 50}}>

                <Info>
                    <Text style={{fontSize: 14, color: '#434343', textAlign: 'center'}}>
                        As informações preenchidas serão divulgadas
                        apenas para a pessoa com a qual você realizar
                        o processo de adoção e/ou apadrinhamento,
                        após a formalização do processo.
                    </Text>
                </Info>
                <Label>informações pessoais</Label>
                <FormTextInput
                    placeholder="Nome completo"
                    value={nome}
                    onChangeText={setNome}
                    containerStyle={{marginTop: 32, marginLeft: 28, marginRight: 16}}
                />
                <FormTextInput
                    placeholder="Idade"
                    value={idade}
                    onChangeText={setIdade}
                    containerStyle={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                    keyboardType='numeric'
                />
                <FormTextInput
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    containerStyle={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                />
                <FormTextInput
                    placeholder="Estado"
                    value={estado}
                    onChangeText={setEstado}
                    containerStyle={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                />
                <FormTextInput
                    placeholder="Cidade"
                    value={cidade}
                    onChangeText={setCidade}
                    containerStyle={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                />
                <FormTextInput
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={setTelefone}
                    containerStyle={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                />

                <Label>informações de perfil</Label>
                <FormTextInput
                    placeholder="Nome de usuário"
                    value={usuario}
                    onChangeText={setUsuario}
                    containerStyle={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                />
                <FormTextInput
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    containerStyle={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                    autoCapitalize="none"
                    secureTextEntry={true}
                />
                <FormTextInput
                    placeholder="Confirmação de senha"
                    value={confirmacao}
                    onChangeText={setConfirmacao}
                    containerStyle={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                    autoCapitalize="none"
                    secureTextEntry={true}
                />

                <Label>foto de perfil</Label>
                <ImageSelector
                    style={{width: 128, height: 128, alignSelf: 'center', borderRadius: 2, marginTop: 32}} 
                    onPress={pickImage}
                />
                <CustomButton
                    label="FAZER CADASTRO"
                    style={{marginBottom: 24, backgroundColor: '#88c9bf', marginTop: 32}}
                    onPress={handlePress}
                    loading={loading}
                />
            </ScrollView>

        </Container>
    );
}
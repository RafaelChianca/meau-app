import React, { useState } from 'react';
import { ScrollView, StatusBar, View, Text } from 'react-native';
import { Header, Container, Title, Info, Label, Foto } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormTextInput from '../../atomic/molecules/FormTextInput';
import CustomButton from '../../atomic/atoms/CustomButton';
import ImageSelector from '../../atomic/molecules/ImageSelector';

export default function Register() {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [telefone, setTelefone] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacao, setConfirmacao] = useState('');

    return(
        <Container>
            <StatusBar
                animated
                backgroundColor="#88c9bf"
                barStyle={"light-content"}
            />
            <Header>
                <Icon style={{marginLeft: 16}} name='bars' color='#434343' size={24}/>
                <Title>Cadastro Pessoal</Title>
            </Header>
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
                    style={{marginTop: 32, marginLeft: 28, marginRight: 16}}
                />
                <FormTextInput
                    placeholder="Idade"
                    value={idade}
                    onChangeText={setIdade}
                    style={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                />
                <FormTextInput
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    style={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                />
                <FormTextInput
                    placeholder="Estado"
                    value={estado}
                    onChangeText={setEstado}
                    style={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                />
                <FormTextInput
                    placeholder="Cidade"
                    value={cidade}
                    onChangeText={setCidade}
                    style={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                />
                <FormTextInput
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={setTelefone}
                    style={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                />

                <Label>informações de perfil</Label>
                <FormTextInput
                    placeholder="Nome de usuário"
                    value={usuario}
                    onChangeText={setUsuario}
                    style={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                />
                <FormTextInput
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    style={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                />
                <FormTextInput
                    placeholder="Confirmação de senha"
                    value={confirmacao}
                    onChangeText={setConfirmacao}
                    style={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                />

                <Label>foto de perfil</Label>
                <ImageSelector style={{width: 128, height: 128, alignSelf: 'center', borderRadius: 2, marginTop: 32}} />
                {/* <Foto>
                    <MaterialIcon name='control-point' color='#757575' size={24}/>
                    <Text style={{fontSize: 14, color: '#757575'}}>adicionar foto</Text>
                </Foto> */}
                <CustomButton
                    label="FAZER CADASTRO"
                    style={{marginBottom: 24, backgroundColor: '#88c9bf', marginTop: 32}}
                />
            </ScrollView>

        </Container>
    );
}
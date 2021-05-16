import React, { useState } from 'react';
import { Alert, ScrollView, StatusBar, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Info, Label, ProfilePicture, PictureContainer, CancelButton } from './styles';
import FormTextInput from '../../atomic/molecules/FormTextInput';
import CustomButton from '../../atomic/atoms/CustomButton';
import ImageSelector from '../../atomic/molecules/ImageSelector';
import CustomHeader from '../../atomic/molecules/CustomHeader';
import { createUserRequested } from '../../store/actions/profile';
import SelectImageModal from '../../atomic/molecules/SelectImageModal';

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
    const [image, setImage] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    function alertGoToCameraConfig(){
        Alert.alert(
            'Podemos acessar sua câmera?',
            'Para que você possa tirar uma foto de perfil, precisamos da sua permissão para acessar sua câmera',
            [
                {
                    text: 'Não',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => {}},
            ],
            {cancelable: false},
        );
    }

    function alertGoToGalleryConfig(){
        Alert.alert(
            'Podemos acessar suas fotos?',
            'Para que você possa escolher uma imagem de perfil, precisamos da sua permissão para acessar a galeria de fotos',
            [
                {
                    text: 'Não',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => {}},
            ],
            {cancelable: false},
        );
    }


    async function askPermissionGallery(){
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);


        switch (status) {
          case 'denied':
            alertGoToGalleryConfig()

            break;
          case 'granted':
            chooseFromGallery();
            break;
        }
    }

    async function askPermissionCamera(){
        const { status } = await Permissions.askAsync(Permissions.CAMERA);

        switch (status) {
          case 'denied':
            alertGoToCameraConfig()
            break;
          case 'granted':
            takePicture();
            break;
        }
    }

    async function takePicture(){
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
      
        if (!result.cancelled) {
            setImage(result);
        }
      }

    async function chooseFromGallery(){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
      
        if (!result.cancelled) {
            setImage(result);
        }
    }

    function onPressedTakePicture(){
        askPermissionCamera();
    }

    function onPressedChooseFromGallery(){
        askPermissionGallery();
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
              image
            ))
        }
    };

    return(
        <>
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
                        keyboardType='numeric'
                        value={idade}
                        onChangeText={setIdade}
                        containerStyle={{marginTop: 28, marginLeft: 28, marginRight: 16}}
                    />
                    <FormTextInput
                        placeholder="E-mail"
                        value={email}
                        onChangeText={text => setEmail(text.trim())}
                        autoCapitalize={'none'}
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
                        keyboardType='numeric'
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
                    {image && image.uri ?
                        <PictureContainer>
                            <ProfilePicture source={{uri: image.uri}} />
                            <CancelButton onPress={() => setImage(null)}>
                                <Icon name='close' color='white' size={20}/>
                            </CancelButton>
                        </PictureContainer>
                    :
                        <ImageSelector
                            style={{
                                height: 128,
                                width: 128,
                                borderRadius: 2,
                                alignSelf: 'center',
                                marginTop: 32
                            }} 
                            onPress={() => setIsModalVisible(true)}
                        />
                    }
                    <CustomButton
                        label="FAZER CADASTRO"
                        style={{marginBottom: 24, backgroundColor: '#88c9bf', marginTop: 32}}
                        onPress={handlePress}
                        loading={loading}
                    />
                </ScrollView>
            </Container>
            <SelectImageModal
                visible={isModalVisible}
                selectedGalleryPicture={onPressedChooseFromGallery}
                selectedTakePicture={onPressedTakePicture}
                onClose={() => setIsModalVisible(false)}
            />
        </>
    );
}
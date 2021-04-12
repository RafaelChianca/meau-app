import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, PetPicture, PictureContainer, CancelButton } from './styles';

import CustomButton from '../../atoms/CustomButton/index';
import FormTextInput from '../../molecules/FormTextInput';
import RadioButton from '../../atoms/RadioButton/index';
import SelectButton from '../../atoms/SelectButton/index';
import FormRadio from '../../molecules/FormRadio';
import FormSelect from '../../molecules/FormSelect';
import ImageSelector from '../../molecules/ImageSelector';
import { registerPetRequested } from '../../../store/actions/pet';
import SelectImageModal from '../../molecules/SelectImageModal';

export default function PertForm({ ...rest }) {

    const dispatch = useDispatch();
    const user = useSelector(state => state.profile.user)

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(null);
    const [species, setSpecies] = useState(null);
    const [speciesError, setSpeciesError] = useState(null);
    const [sex, setSex] = useState(null);
    const [sexError, setSexError] = useState(null);
    const [size, setSize] = useState(null);
    const [sizeError, setSizeError] = useState(null);
    const [age, setAge] = useState(null);
    const [ageError, setAgeError] = useState(null);
    const [temperment, setTemperment] = useState([]);
    const [tempermentError, setTempermentError] = useState(null);
    const [health, setHealth] = useState([]);
    const [healthError, setHealthError] = useState(null);
    const [diseases, setDiseases] = useState('');
    const [diseasesError, setDiseasesError] = useState(null);
    const [conditions, setConditions] = useState([]);
    const [conditionsError, setConditionsError] = useState(null);
    const [time, setTime] = useState([]);
    const [about, setAbout] = useState('');
    const [aboutError, setAboutError] = useState(null);
    const [image, setImage] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        if (!conditions.includes(4)) {
            setTime([]);
        }
    }, [conditions]);

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
                // {text: 'OK', onPress: () => openSettings().catch(() => console.warn('cannot open settings'))},
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
                // {text: 'OK', onPress: () => openSettings().catch(() => console.warn('cannot open settings'))},
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
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case 'granted':
            chooseFromGallery();
            if (__DEV__) console.log('DEU PERMISSAO');
            break;
        }
    }

    async function askPermissionCamera(){
        const { status } = await Permissions.askAsync(Permissions.CAMERA);

        switch (status) {
          case 'denied':
            alertGoToCameraConfig()
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case 'granted':
            takePicture();
            if (__DEV__) console.log('DEU PERMISSAO');
            break;
        }
    }

    async function takePicture(){
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
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
            base64: true,
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

    function handleSelect(selectedArray, setSelectedArray, selectedID) {
        let array = [...selectedArray];
        let index = array.indexOf(selectedID)
        if (index !== -1) {
            array.splice(index, 1);
            setSelectedArray(array);
        } else {
            array.push(selectedID);
            setSelectedArray(array);
        }
    }

    const handleSubmit = () => {
        let error = false;

        if (name.length === 0) {
            setNameError('Campo obrigatório.')
            error = true;
        } else {
            setNameError(null)
        }
        if (!species) {
            setSpeciesError('Campo obrigatório.')
            error = true;
        } else {
            setSpeciesError(null)
        }
        if (!sex) {
            setSexError('Campo obrigatório.')
            error = true;
        } else {
            setSexError(null)
        }
        if (!size) {
            setSizeError('Campo obrigatório.')
            error = true;
        } else {
            setSizeError(null)
        }
        if (!age) {
            setAgeError('Campo obrigatório.')
            error = true;
        } else {
            setAgeError(null)
        }
        if (temperment.length === 0) {
            setTempermentError('Selecione ao menos um.')
            error = true;
        } else {
            setTempermentError(null)
        }
        if (health.length === 0) {
            setHealthError('Selecione ao menos um.')
            error = true;
        } else {
            setHealthError(null)
        }
        if (diseases.length === 0) {
            setDiseasesError('Campo obrigatório.')
            error = true;
        } else {
            setDiseasesError(null)
        }
        if (conditions.length === 0) {
            setConditionsError('Selecione ao menos um.')
            error = true;
        } else if (conditions.includes('Acompanhamento pós adoção')) {
            if (time.length === 0) {
                setConditionsError('Selecione um tempo de acompanhamento.')
                error = true;
            } else {
                setConditionsError(null)
            }
        } else {
            setConditionsError(null)
        }
        if (about.length === 0) {
            setAboutError('Campo obrigatório')
            error = true;
        } else {
            setAboutError(null)
        }

        if (error) {
            return
        } else {
            dispatch(registerPetRequested(
                name,
                species,
                sex,
                size,
                age,
                temperment,
                health,
                diseases,
                conditions,
                time,
                about,
                user.id,
                image
            ))
        }
    }

    return (
        <>
            <Container {...rest}>
                <FormTextInput
                    label="Nome do animal"
                    placeholder="Nome do animal"
                    value={name}
                    onChangeText={setName}
                    containerStyle={{marginBottom: 20}}
                    error={nameError}
                />
                {image && image.uri ?
                    <PictureContainer>
                        <PetPicture source={{uri: image.uri}} />
                        <CancelButton onPress={() => setImage(null)}>
                            <Icon name='close' color='white' size={20}/>
                        </CancelButton>
                    </PictureContainer>
                :
                    <ImageSelector
                        onPress={() => setIsModalVisible(true)}
                        label="Fotos do animal"
                        style={{marginBottom: 20}}
                    />
                }
                <FormRadio label="Espécie" style={{marginBottom: 20}} error={speciesError}>
                    <RadioButton
                        label="Cachorro"
                        selected={species === 'Cachorro'}
                        onPress={() => setSpecies('Cachorro')}
                    />
                    <RadioButton
                        label="Gato"
                        selected={species === 'Gato'}
                        onPress={() => setSpecies('Gato')}
                    />
                </FormRadio>
                <FormRadio label="Sexo" style={{marginBottom: 20}} error={sexError}>
                    <RadioButton
                        label="Masculino"
                        selected={sex === 'Masculino'}
                        onPress={() => setSex('Masculino')}
                    />
                    <RadioButton
                        label="Feminino"
                        selected={sex === 'Feminino'}
                        onPress={() => setSex('Feminino')}
                    />
                </FormRadio>
                <FormRadio label="Porte" style={{marginBottom: 20}} error={sizeError}>
                    <RadioButton
                        label="Pequeno"
                        selected={size === 'Pequeno'}
                        onPress={() => setSize('Pequeno')}
                    />
                    <RadioButton
                        label="Médio"
                        selected={size === 'Médio'}
                        onPress={() => setSize('Médio')}
                    />
                    <RadioButton
                        label="Grande"
                        selected={size === 'Grande'}
                        onPress={() => setSize('Grande')}
                    />
                </FormRadio>
                <FormRadio label="Idade" style={{marginBottom: 20}} error={ageError}>
                    <RadioButton
                        label="Filhote"
                        selected={age === 'Filhote'}
                        onPress={() => setAge('Filhote')}
                    />
                    <RadioButton
                        label="Adulto"
                        selected={age === 'Adulto'}
                        onPress={() => setAge('Adulto')}
                    />
                    <RadioButton
                        label="Idoso"
                        selected={age === 'Idoso'}
                        onPress={() => setAge('Idoso')}
                    />
                </FormRadio>
                <FormSelect label="Temperamento" style={{marginBottom: 20}} error={tempermentError}>
                    <SelectButton
                        label="Brincalhão"
                        selected={temperment?.includes('Brincalhão')}
                        onPress={() => handleSelect(temperment, setTemperment, 'Brincalhão')}
                        style={{marginBottom: 20}}
                    />
                    <SelectButton
                        label="Tímido"
                        selected={temperment?.includes('Tímido')}
                        onPress={() => handleSelect(temperment, setTemperment, 'Tímido')}
                        style={{marginBottom: 20}}
                    />
                    <SelectButton
                        label="Calmo"
                        selected={temperment?.includes('Calmo')}
                        onPress={() => handleSelect(temperment, setTemperment, 'Calmo')}
                        style={{marginBottom: 20}}
                    />
                    <SelectButton
                        label="Guarda"
                        selected={temperment?.includes('Guarda')}
                        onPress={() => handleSelect(temperment, setTemperment, 'Guarda')}
                        style={{marginBottom: 20}}
                    />
                    <SelectButton
                        label="Amoroso"
                        selected={temperment?.includes('Amoroso')}
                        onPress={() => handleSelect(temperment, setTemperment, 'Amoroso')}
                    />
                    <SelectButton
                        label="Preguiçoso"
                        selected={temperment?.includes('Preguiçoso')}
                        onPress={() => handleSelect(temperment, setTemperment, 'Preguiçoso')}
                    />
                </FormSelect>
                <FormSelect label="Saúde" style={{marginBottom: 20}} error={healthError}>
                    <SelectButton
                        label="Vacinado"
                        selected={health?.includes('Vacinado')}
                        onPress={() => handleSelect(health, setHealth, 'Vacinado')}
                        style={{marginBottom: 20}}
                    />
                    <SelectButton
                        label="Vermifugado"
                        selected={health?.includes('Vermifugado')}
                        onPress={() => handleSelect(health, setHealth, 'Vermifugado')}
                        style={{marginBottom: 20}}
                    />
                    <SelectButton
                        label="Castrado"
                        selected={health?.includes('Castrado')}
                        onPress={() => handleSelect(health, setHealth, 'Castrado')}
                    />
                    <SelectButton
                        label="Doente"
                        selected={health?.includes('Doente')}
                        onPress={() => handleSelect(health, setHealth, 'Doente')}
                    />
                </FormSelect>
                <FormTextInput
                    placeholder="Doenças do animal"
                    value={diseases}
                    onChangeText={setDiseases}
                    containerStyle={{marginBottom: 20}}
                    error={diseasesError}
                />
                <FormSelect label="Exigências para adoção" error={conditionsError}>
                    <SelectButton
                        label="Termo de adoção"
                        selected={conditions?.includes('Termo de adoção')}
                        onPress={() => handleSelect(conditions, setConditions, 'Termo de adoção')}
                        style={{marginBottom: 20}}
                    />
                    <SelectButton
                        label="Fotos da casa"
                        selected={conditions?.includes('Fotos da casa')}
                        onPress={() => handleSelect(conditions, setConditions, 'Fotos da casa')}
                        style={{minWidth: '100%', marginBottom: 20}}
                    />
                    <SelectButton
                        label="Visita prévia ao animal"
                        selected={conditions?.includes('Visita prévia ao animal')}
                        onPress={() => handleSelect(conditions, setConditions, 'Visita prévia ao animal')}
                        style={{marginBottom: 20}}
                    />
                    <SelectButton
                        label="Acompanhamento pós adoção"
                        selected={conditions?.includes('Acompanhamento pós adoção')}
                        onPress={() => handleSelect(conditions, setConditions, 'Acompanhamento pós adoção')}
                        style={{marginBottom: 20, minWidth: '100%'}}
                    />
                </FormSelect>
                <FormSelect style={{marginLeft: 20, marginBottom: 20}}>
                    <SelectButton
                        label="1 mês"
                        disabled={!conditions?.includes('Acompanhamento pós adoção')}
                        selected={time?.includes('1 mês')}
                        onPress={() => handleSelect(time, setTime, '1 mês')}
                        style={{minWidth: '100%', marginBottom: 20}}
                    />
                    <SelectButton
                        label="3 meses"
                        disabled={!conditions?.includes('Acompanhamento pós adoção')}
                        selected={time?.includes('3 meses')}
                        onPress={() => handleSelect(time, setTime, '3 meses')}
                        style={{minWidth: '100%', marginBottom: 20}}
                    />
                    <SelectButton
                        label="6 meses"
                        disabled={!conditions?.includes('Acompanhamento pós adoção')}
                        selected={time?.includes('6 meses')}
                        onPress={() => handleSelect(time, setTime, '6 meses')}
                        style={{minWidth: '100%'}}
                    />
                </FormSelect>
                <FormTextInput
                    label="Sobre o animal"
                    placeholder="Sobre o animal"
                    value={about}
                    onChangeText={setAbout}
                    containerStyle={{marginBottom: 24}}
                    error={aboutError}
                />
                <CustomButton
                    label="Colocar para adoção"
                    style={{marginBottom: 24}}
                    onPress={handleSubmit}
                />
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

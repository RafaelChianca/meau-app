import React from 'react';
import { Text } from 'react-native';
import { PetImage, FavButton, TextGroup, Titulo, Group, Linha } from './styles';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import CustomButton from '../../atoms/CustomButton';

export default function AdoptDetails({ pet, ...rest }) {

    const dogPicture = 'https://www.ourofinosaudeanimal.com/media/old/uploads/blog/post/fotos/2014/20140918100642.jpg.600x500_q85_box-269%2C0%2C931%2C551_crop_detail.jpg'
    const catPicture = 'data:image/jpeg;base64,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'

    return(
        <>
            <PetImage source={{uri: pet.species === 'Cachorro' ? dogPicture : catPicture}}></PetImage>
            <FavButton>
                <EvilIcon name="heart" color="#434343" size={48}/>
            </FavButton>
            <Text style={{fontSize:16, color:"#434343", fontWeight: 'bold', marginLeft: 30, marginTop: -24, marginBottom: 16 }}>{pet.name}</Text>
            <Group>
                <TextGroup>
                    <Titulo>Sexo</Titulo>
                    <Text>{pet.sex}</Text>
                </TextGroup>
                <TextGroup>
                    <Titulo>Porte</Titulo>
                    <Text>{pet.size}</Text>
                </TextGroup>
                <TextGroup>
                    <Titulo>Idade</Titulo>
                    <Text>{pet.age}</Text>
                </TextGroup>
            </Group>
            <Group>
                <TextGroup>
                    <Titulo>Localização</Titulo>
                    <Text></Text>
                </TextGroup>
            </Group>
            <Linha/>
            <Group>
                <TextGroup>
                    <Titulo>castrado</Titulo>
                    <Text>{pet.health?.includes('Castrado')?'Sim':'Não'}</Text>
                </TextGroup>
                <TextGroup>
                    <Titulo>vermifugado</Titulo>
                    <Text>{pet.health?.includes('Vermifugado')?'Sim':'Não'}</Text>
                </TextGroup>
            </Group>
            <Group>
                <TextGroup>
                    <Titulo>vacinado</Titulo>
                    <Text>{pet.health?.includes('Vacinado')?'Sim':'Não'}</Text>
                </TextGroup>
                <TextGroup>
                    <Titulo>doenças</Titulo>
                    <Text>{pet.diseases}</Text>
                </TextGroup>
            </Group>
            <Linha/>
            <Group>
                <TextGroup>
                    <Titulo>Temperamento</Titulo>
                    <Text>{pet.temperment.join(', ')}</Text>
                </TextGroup>
            </Group>
            <Linha/>
            <Group>
                <TextGroup>
                    <Titulo>exigências do doador</Titulo>
                    <Text>{pet.conditions.join(', ')}</Text>
                </TextGroup>
            </Group>
            <Linha/>
            <Group>
                <TextGroup>
                    <Titulo>mais sobre {pet.name}</Titulo>
                    <Text>{pet.about}</Text>
                </TextGroup>
            </Group>
            <CustomButton label="PRETENDO ADOTAR" style={{backgroundColor: "#fdcf58", fontWeight: 'bold', marginBottom: 28, marginTop: 12}}></CustomButton>
        </>
    );
}
import React, { useEffect, useState } from 'react';
import CustomButton from '../../atoms/CustomButton/Index';
import FormTextInput from '../../molecules/FormTextInput/index';
import RadioButton from '../../atoms/RadioButton/Index';
import SelectButton from '../../atoms/SelectButton/Index';
import FormRadio from '../../molecules/FormRadio';
import FormSelect from '../../molecules/FormSelect';
import { Container } from './styles';
import CustomTextInput from '../../atoms/CustomTextInput/Index';
import ImageSelector from '../../molecules/ImageSelector';

export default function AdoptForm() {

    const [name, setName] = useState('');
    const [species, setSpecies] = useState(0);
    const [sex, setSex] = useState(0);
    const [size, setSize] = useState(0);
    const [age, setAge] = useState(0);
    const [temperment, setTemperment] = useState([]);
    const [health, setHealth] = useState([]);
    const [diseases, setDiseases] = ('');
    const [conditions, setConditions] = useState([]);
    const [time, setTime] = useState([]);
    const [about, setAbout] = useState('');

    useEffect(() => {
        if (!conditions.includes(4)) {
            setTime([]);
        }
    }, [conditions]);

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

    return (
        <Container>
            <FormTextInput
                label="Nome do animal"
                placeholder="Nome do animal"
                value={name}
                onChangeText={setName}
                style={{marginBottom: 20}}
            />
            <ImageSelector label="Fotos do animal" style={{marginBottom: 20}} />
            <FormRadio label="Espécie" style={{marginBottom: 20}}>
                <RadioButton
                    label="Cachorro"
                    selected={species === 1}
                    onPress={() => setSpecies(1)}
                />
                <RadioButton
                    label="Gato"
                    selected={species === 2}
                    onPress={() => setSpecies(2)}
                />
            </FormRadio>
            <FormRadio label="Sexo" style={{marginBottom: 20}}>
                <RadioButton
                    label="Masculino"
                    selected={sex === 1}
                    onPress={() => setSex(1)}
                />
                <RadioButton
                    label="Feminino"
                    selected={sex === 2}
                    onPress={() => setSex(2)}
                />
            </FormRadio>
            <FormRadio label="Porte" style={{marginBottom: 20}}>
                <RadioButton
                    label="Pequeno"
                    selected={size === 1}
                    onPress={() => setSize(1)}
                />
                <RadioButton
                    label="Médio"
                    selected={size === 2}
                    onPress={() => setSize(2)}
                />
                <RadioButton
                    label="Grande"
                    selected={size === 3}
                    onPress={() => setSize(3)}
                />
            </FormRadio>
            <FormRadio label="Idade" style={{marginBottom: 20}}>
                <RadioButton
                    label="Filhote"
                    selected={age === 1}
                    onPress={() => setAge(1)}
                />
                <RadioButton
                    label="Adulto"
                    selected={age === 2}
                    onPress={() => setAge(2)}
                />
                <RadioButton
                    label="Idoso"
                    selected={age === 3}
                    onPress={() => setAge(3)}
                />
            </FormRadio>
            <FormSelect label="Sexo" style={{marginBottom: 20}}>
                <SelectButton
                    label="Brincalhão"
                    selected={temperment?.includes(1)}
                    onPress={() => handleSelect(temperment, setTemperment, 1)}
                    style={{marginBottom: 20}}
                />
                <SelectButton
                    label="Tímido"
                    selected={temperment?.includes(2)}
                    onPress={() => handleSelect(temperment, setTemperment, 2)}
                    style={{marginBottom: 20}}
                />
                <SelectButton
                    label="Calmo"
                    selected={temperment?.includes(3)}
                    onPress={() => handleSelect(temperment, setTemperment, 3)}
                    style={{marginBottom: 20}}
                />
                <SelectButton
                    label="Guarda"
                    selected={temperment?.includes(4)}
                    onPress={() => handleSelect(temperment, setTemperment, 4)}
                    style={{marginBottom: 20}}
                />
                <SelectButton
                    label="Amoroso"
                    selected={temperment?.includes(5)}
                    onPress={() => handleSelect(temperment, setTemperment, 5)}
                />
                <SelectButton
                    label="Preguiçoso"
                    selected={temperment?.includes(6)}
                    onPress={() => handleSelect(temperment, setTemperment, 6)}
                />
            </FormSelect>
            <FormSelect label="Saúde" style={{marginBottom: 20}}>
                <SelectButton
                    label="Vacinado"
                    selected={health?.includes(1)}
                    onPress={() => handleSelect(health, setHealth, 1)}
                    style={{marginBottom: 20}}
                />
                <SelectButton
                    label="Vermifugado"
                    selected={health?.includes(2)}
                    onPress={() => handleSelect(health, setHealth, 2)}
                    style={{marginBottom: 20}}
                />
                <SelectButton
                    label="Castrado"
                    selected={health?.includes(3)}
                    onPress={() => handleSelect(health, setHealth, 3)}
                />
                <SelectButton
                    label="Doente"
                    selected={health?.includes(4)}
                    onPress={() => handleSelect(health, setHealth, 4)}
                />
            </FormSelect>
            <CustomTextInput
                placeholder="Doenças do animal"
                value={diseases}
                onChangeText={setDiseases}
                style={{marginBottom: 20}}
            />
            <FormSelect label="Exigências para adoção">
                <SelectButton
                    label="Termo de adoção"
                    selected={conditions?.includes(1)}
                    onPress={() => handleSelect(conditions, setConditions, 1)}
                    style={{marginBottom: 20}}
                />
                <SelectButton
                    label="Fotos da casa"
                    selected={conditions?.includes(2)}
                    onPress={() => handleSelect(conditions, setConditions, 2)}
                    style={{minWidth: '100%', marginBottom: 20}}
                />
                <SelectButton
                    label="Visita prévia ao animal"
                    selected={conditions?.includes(3)}
                    onPress={() => handleSelect(conditions, setConditions, 3)}
                    style={{marginBottom: 20}}
                />
                <SelectButton
                    label="Acompanhamento pós adoção"
                    selected={conditions?.includes(4)}
                    onPress={() => handleSelect(conditions, setConditions, 4)}
                    style={{marginBottom: 20, minWidth: '100%'}}
                />
            </FormSelect>
            <FormSelect style={{marginLeft: 20, marginBottom: 20}}>
                <SelectButton
                    label="1 mês"
                    disabled={!conditions?.includes(4)}
                    selected={time?.includes(1)}
                    onPress={() => handleSelect(time, setTime, 1)}
                    style={{minWidth: '100%', marginBottom: 20}}
                />
                <SelectButton
                    label="3 meses"
                    disabled={!conditions?.includes(4)}
                    selected={time?.includes(2)}
                    onPress={() => handleSelect(time, setTime, 2)}
                    style={{minWidth: '100%', marginBottom: 20}}
                />
                <SelectButton
                    label="6 meses"
                    disabled={!conditions?.includes(4)}
                    selected={time?.includes(3)}
                    onPress={() => handleSelect(time, setTime, 3)}
                    style={{minWidth: '100%'}}
                />
            </FormSelect>
            <FormTextInput
                label="Sobre o animal"
                placeholder="Sobre o animal"
                value={about}
                onChangeText={setAbout}
                style={{marginBottom: 24}}
            />
            <CustomButton
                label="Colocar para adoção"
                style={{marginBottom: 24}}
            />
        </Container>
    );
}

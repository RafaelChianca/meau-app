import React from 'react'
import { StatusBar } from 'react-native'
import CustomHeader from '../../atomic/molecules/CustomHeader'
import MyPetList from '../../atomic/organisms/MyPetList'
import { Container } from './styles'

export default function MyPets () {
    return (
        <Container>
            <StatusBar
                animated={true}
                backgroundColor="#589b9b"
                barStyle={'dark-content'}
            />
            <CustomHeader
                leftIcon='menu'
                label='Meus Pets'
                style={{backgroundColor: '#88c9bf'}}
                // TO DO
                // rightIcon='search'
            />
            <MyPetList headerColor={'#cfe9e5'} icon='info' />
        </Container>
    )
}
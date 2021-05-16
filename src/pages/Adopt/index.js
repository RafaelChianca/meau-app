import React from 'react'
import { StatusBar } from 'react-native'
import CustomHeader from '../../atomic/molecules/CustomHeader'
import AdoptionList from '../../atomic/organisms/AdoptionList'
import { Container } from './styles'

export default function Adopt () {
    return (
        <Container>
            <StatusBar
                animated={true}
                backgroundColor="#f7a800"
                barStyle={'dark-content'}
            />
            <CustomHeader
                leftIcon='menu'
                label='Adotar'
                style={{backgroundColor: '#ffd358'}}
                // TO DO
                // rightIcon='search'
            />
            <AdoptionList />
        </Container>
    )
}
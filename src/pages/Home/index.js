import React from 'react'
import { StatusBar } from 'react-native'
import CustomHeader from '../../atomic/molecules/CustomHeader'
import Introduction from '../../atomic/organisms/Introduction'
import { Container } from './styles'

export default function Home () {
    return (
        <Container>
            <StatusBar
                animated={true}
                backgroundColor="white"
                barStyle={'dark-content'}
            />
            <CustomHeader leftIcon='menu' iconColor='#88c9bf' />
            <Introduction />
        </Container>
    )
}
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import CustomHeader from '../../atomic/molecules/CustomHeader'
import Introduction from '../../atomic/organisms/Introduction'
import { Container } from './styles'
import { loadNotificationsRequested } from '../../store/actions/profile';

export default function Home () {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.profile);

    const openNotifications = () => {
        navigation.navigate('Notification');
    }

    useEffect(() => {
        if (user && user.id) {
            dispatch(loadNotificationsRequested(user.id));
        }
    }, [user])

    return (
        <Container>
            <StatusBar
                animated={true}
                backgroundColor="white"
                barStyle={'dark-content'}
            />
            <CustomHeader
                leftIcon='menu'
                iconColor='#88c9bf'
                rightIcon='notification'
                onPressRightIcon={openNotifications}
            />
            <Introduction />
        </Container>
    )
}
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextNotification from '../../molecules/TextNotification';
import OptionNotification from '../../molecules/OptionNotification';
import { clearNotificationsRequested, loadNotificationsRequested, loadNotificationsSucceeded } from '../../../store/actions/profile';
import { clearRefresh } from '../../../store/actions/pet';
import { Container, ClearButton, ClearText } from './styles';
import { useEffect } from 'react';

export default function NotificationList({ headerColor, icon, ...rest }) {
    const dispatch = useDispatch();
    const { user, notifications } = useSelector(state => state.profile);
    const { refresh } = useSelector(state => state.pet);

    useEffect(() => {
        if (refresh) {
            dispatch(loadNotificationsRequested(user.id));
            dispatch(clearRefresh());
        }
    }, [refresh])

    const clearNotifications = () => {
        let deleteIDs = [];

        notifications.forEach(element => {
            if (!element.acceptable) {
                deleteIDs.push(element.id);
            }
        });

        if (deleteIDs.length > 0) {
            dispatch(clearNotificationsRequested(deleteIDs));
            setTimeout(() => {
                dispatch(loadNotificationsSucceeded([]));
                dispatch(loadNotificationsRequested(user.id));
            }, 700);
        }
    }

    return (
        <Container {...rest}>
            {notifications.length > 0 &&
                <ClearButton onPress={clearNotifications}>
                    <ClearText>Limpar notificações</ClearText>
                </ClearButton>
            }
            {notifications?.map((item) => {
                if (item.acceptable) {
                    return (
                        <OptionNotification key={item.id} notification={item} />
                    )
                } else {
                    return (
                        <TextNotification key={item.id} notification={item} />
                    )
                }
            })}
        </Container>
    )
}
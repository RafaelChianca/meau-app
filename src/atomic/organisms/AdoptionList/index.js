import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPetsRequested } from '../../../store/actions/pet';
import AdoptOption from '../../molecules/AdoptOption';
import { Container } from './styles';

export default function AdoptionList({ headerColor, icon, ...rest }) {
    const { petList } = useSelector(state => state.pet);
    const { user } = useSelector(state => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPetsRequested(1, 20));
    }, [])

    return (
        <Container {...rest}>
            {petList.filter(item => item.ownerID !== user.id)?.map((item) => {
                return (
                    <AdoptOption headerColor={headerColor} icon={icon} pet={item} />
                )
            })}
        </Container>
    )
}
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPetsRequested } from '../../../store/actions/pet';
import MyPetCard from '../../molecules/MyPetCard';
import { Container } from './styles';

export default function MyPetList({ headerColor, icon, ...rest }) {
    const petList = useSelector(state => state.pet.petList);
    const user = useSelector(state => state.profile.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPetsRequested(1, 20, user.id));
    }, [])

    return (
        <Container {...rest}>
            {petList.filter(item => item.ownerID === user.id)?.map((item) => {
                return (
                    <MyPetCard headerColor={headerColor} icon={icon} pet={item} key={item.id} />
                )
            })}
        </Container>
    )
}
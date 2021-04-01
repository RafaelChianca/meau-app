import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, ContentContainer, LogoutButton } from './styles';
import { MenuHeader } from '../../molecules/MenuHeader';
import MenuCategory from '../../molecules/MenuCategory';
import { MenuItem } from '../../molecules/MenuItem';
import { logOutRequested } from '../../../store/actions/profile';

export const SideMenu = (props) => {

    const { navigation } = props;

    const user = useSelector(state => state.profile.user);

    const dispatch = useDispatch();

    const [displayName, setDisplayName] = useState('Efetue o login');
    const [shrunkenPaw, setShrunkenPaw] = useState(true);
    const [shrunkenInfo, setShrunkenInfo] = useState(true);
    const [shrunkenProfile, setShrunkenProfile] = useState(true);

    useEffect(() => {
        if (user && user.name && user.name.length > 0) {
            setDisplayName(user.name)
        } else if (user && user.email) {
            setDisplayName(user.email)
        } else {
            setDisplayName('Efetue o login')
        }
    })

    const logOut = () => {
        dispatch(logOutRequested());
    }

    return (
        <Drawer {...props}>
            <ContentContainer>
                <MenuHeader />
                <MenuCategory
                    label={displayName}
                    style={{backgroundColor: '#88c9bf'}}
                    labelStyle={{textTransform: 'none'}}
                    expandable={user && Object.keys(user).length > 0}
                    shrunken={shrunkenProfile}
                    onPress={() => {
                        if (user && Object.keys(user).length > 0) {
                            setShrunkenProfile(prev => !prev)
                        } else {
                            navigation.navigate('Login')
                        }
                    }}
                >
                    <MenuItem
                        label='Meus pets'
                        separator={false}
                        onPress={() => navigation.navigate('MyPets')}
                    />
                </MenuCategory>
                {user && Object.keys(user).length > 0 &&
                <>
                    <MenuCategory
                        label='Atalhos'
                        leftIcon={{name: 'paw'}}
                        style={{backgroundColor: '#fee29b'}}
                        shrunken={shrunkenPaw}
                        onPress={() => setShrunkenPaw(prev => !prev)}
                    >
                        <MenuItem
                            label='Cadastrar um pet'
                            onPress={() => navigation.navigate('RegisterPet')}
                        />
                        <MenuItem
                            label='Adotar um pet'
                            onPress={() => navigation.navigate('Adopt')}
                            separator={false}
                        />
                    </MenuCategory>
                    <MenuCategory
                        label='Informações'
                        leftIcon={{name: 'info'}}
                        style={{backgroundColor: '#cfe9e5'}}
                        expandable={false}
                        onPress={() => setShrunkenInfo(prev => !prev)}
                    >

                    </MenuCategory>
                    <MenuCategory
                        label='Configurações'
                        leftIcon={{name: 'gear'}}
                        expandable={false}
                    />
                </>
                }
            </ContentContainer>
            <LogoutButton label='Sair' onPress={logOut} />
        </Drawer>
    );
}

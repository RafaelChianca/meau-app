import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, ContentContainer, LogoutButton } from './styles';
import { MenuHeader } from '../../molecules/MenuHeader';
import MenuCategory from '../../molecules/MenuCategory';
import { MenuItem } from '../../molecules/MenuItem';
import { logOutRequested } from '../../../store/actions/profile';

export const SideMenu = (props) => {

    const { navigation } = props;

    const { user } = useSelector(state => state.profile);

    const dispatch = useDispatch();

    const [loggedUser, setLoggedUser] = useState(null);
    const [shrunkenPaw, setShrunkenPaw] = useState(true);
    const [shrunkenInfo, setShrunkenInfo] = useState(true);
    const [shrunkenProfile, setShrunkenProfile] = useState(true)

    useEffect(() => {
        setLoggedUser(user);
    }, [user])

    const logOut = () => {
        dispatch(logOutRequested());
    }

    return (
        <Drawer {...props}>
            <ContentContainer>
                <MenuHeader url={loggedUser && loggedUser.imageURL ? loggedUser.imageURL : null} />
                <MenuCategory
                    label={(loggedUser && Object.keys(loggedUser).length > 0)
                        ? loggedUser.name ? loggedUser.name : ''
                        : 'Efetue o login'
                    }
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
                        label='Home'
                        separator={true}
                        onPress={() => navigation.navigate('Home')}
                    />
                    <MenuItem
                        label='Notificações'
                        separator={true}
                        onPress={() => navigation.navigate('Notification')}
                    />
                    <MenuItem
                        label='Meus pets'
                        separator={true}
                        onPress={() => navigation.navigate('MyPets')}
                    />
                    <MenuItem
                        label='Chat'
                        separator={false}
                        onPress={() => navigation.navigate('Chat')}
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

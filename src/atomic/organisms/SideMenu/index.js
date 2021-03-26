import React, { useState } from 'react';
import { MenuHeader } from '../../molecules/MenuHeader';
import MenuCategory from '../../molecules/MenuCategory';
import { MenuItem } from '../../molecules/MenuItem';
import { Drawer, ContentContainer, LogoutButton } from './styles';

export const SideMenu = (props) => {

    const { navigation } = props;

    const [shrunkenPaw, setShrunkenPaw] = useState(true);
    const [shrunkenInfo, setShrunkenInfo] = useState(true);

    const logOut = () => {
        navigation.replace('Login');
        navigation.closeDrawer();
    }

    return (
        <Drawer {...props}>
            <ContentContainer>
                <MenuHeader />
                <MenuCategory
                    label='Rafael Chianca'
                    style={{backgroundColor: '#88c9bf'}}
                    expandable={false}
                >
                </MenuCategory>
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
                    shrunken={shrunkenInfo}
                    onPress={() => setShrunkenInfo(prev => !prev)}
                >
                    <MenuItem
                        label='Dicas'
                    />
                    <MenuItem
                        label='Eventos'
                    />
                    <MenuItem
                        label='Legislação'
                        separator={false}
                    />
                </MenuCategory>
                <MenuCategory
                    label='Configurações'
                    leftIcon={{name: 'gear'}}
                    expandable={false}
                />
            </ContentContainer>
            <LogoutButton label='Sair' onPress={logOut} />
        </Drawer>
    );
}

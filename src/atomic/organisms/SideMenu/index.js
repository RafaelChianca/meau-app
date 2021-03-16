import React, { useState } from 'react';
import { MenuHeader } from '../../molecules/MenuHeader';
import MenuCategory from '../../molecules/MenuCategory';
import { MenuItem } from '../../molecules/MenuItem';
import { Drawer, LogoutButton } from './styles';

export const SideMenu = (props) => {

    const { navigation } = props;

    const [shrunkenPaw, setShrunkenPaw] = useState(true);
    const [shrunkenInfo, setShrunkenInfo] = useState(true);

    return (
        <Drawer {...props} >
            <MenuHeader />
            <MenuCategory
                label='Rafael Chianca'
                style={{backgroundColor: '#88c9bf'}}
                expandable={false}
            >
            </MenuCategory>
            <MenuCategory
                label='Atalhos'
                icon={{name: 'paw'}}
                style={{backgroundColor: '#fee29b'}}
                shrunken={shrunkenPaw}
                onPress={() => setShrunkenPaw(prev => !prev)}
            >
                <MenuItem
                    label='Cadastrar um pet'
                    onPress={() => navigation.navigate('PetForm')}
                    separator={false}
                />
            </MenuCategory>
            <MenuCategory
                label='Informações'
                icon={{name: 'info'}}
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
                icon={{name: 'gear'}}
                expandable={false}
            />
            <LogoutButton label='Sair' />
        </Drawer>
    );
}

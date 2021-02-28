import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    fundo:{
        backgroundColor: '#fafafa',
        width: '100%',
        height: '100%',
    },

    barraSuperior:{
        backgroundColor: '#88c9bf',
        width: '100%',
        height: 24
    },

    header:{
        backgroundColor: '#cfe9e5',
        width: '100%',
        height: 56,
        alignItems: 'center',
        flexDirection: 'row',
    },

    inputs:{
        color: '#434343',
        fontSize: 17,
        borderBottomColor: '#e6e7e8',
        borderBottomWidth: 1,
        width: 312,
        alignSelf: 'center'
    },

    botaoEntrar:{
        backgroundColor: '#88c9bf',
        borderRadius: 2,
        width:232,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 52,
    }

    
});

export default styles;
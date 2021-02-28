import {StyleSheet} from 'react-native';
// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

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

    textoOps:{
        color: '#88c9bf',
        fontSize: 53,
        marginTop: 52,
        marginBottom: 52,
        alignSelf: 'center',
        // fontFamily: 'Courgette',
    },

    texto:{
        color: '#757575',
        fontSize: 14,
        alignSelf: 'center',
    },

    botao:{
        backgroundColor: '#88c9bf',
        borderRadius: 2,
        width:232,
        height:40,
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    }

    
});

export default styles;
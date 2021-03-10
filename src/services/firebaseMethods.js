import * as firebase from 'firebase';
import { Alert } from "react-native";
import 'firebase/firestore';
import * as RootNavigation from './RootNavigation';

export async function signIn(email, password) {
  await firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
    Alert.alert('Sucesso!');
    RootNavigation.resetTo("PetForm");
  })
  .catch((error) => {
    let message;

    switch (error.code) {
      case 'auth/invalid-email':
        message = 'E-mail inválido';
        break;        

      case 'auth/user-not-found':
        message = 'Usuário não cadastrado';
        break;

      case 'auth/wrong-password':
        message = 'Senha incorreta';
        break;

      default:
        message = 'Tente novamente';
        break;
    }

    Alert.alert('Ops!', message);
    console.log('Erro de login', error.code)
  })
}
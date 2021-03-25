import * as firebase from 'firebase';
import { Alert } from "react-native";
import 'firebase/firestore';
import * as RootNavigation from './RootNavigation';

const firebaseConfig = {
  apiKey: "AIzaSyBDupsgo2xY9KCjHn4tfjrZHSdkQJrmQa4",
  authDomain: "meau-app-dev.firebaseapp.com",
  projectId: "meau-app-dev",
  storageBucket: "meau-app-dev.appspot.com",
  messagingSenderId: "149651925597",
  appId: "1:149651925597:web:20749db1737d4f7ad77bb4",
  measurementId: "G-V86PQKWBTL"
}

if (!firebase.apps.length || !firebase.length){
  firebase.initializeApp(firebaseConfig)
}

export async function signIn(email, password) {
  await firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
    Alert.alert('Sucesso!');
    RootNavigation.resetTo("Home");
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
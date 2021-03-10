import * as firebase from 'firebase';
import {Alert} from "react-native";
import 'firebase/firestore';

export async function signIn(email, password) {
    try {
     await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    } catch (err) {
      Alert.alert("Alguma coisa deu errado!", err.message);
    }
  }
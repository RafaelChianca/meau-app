import { Alert } from 'react-native';
import { call, all, put, takeLatest } from 'redux-saga/effects'
import * as firebase from 'firebase';
import * as ProfileActions from '../actions/profile';
import * as PetActions from '../actions/pet';
import { petTypes, profileTypes } from '../actionTypes';
import * as RootNavigation from '../../services/RootNavigation'

function* createUser(action) {
    const { name, email, username, password, age, state, city, phone, image } = action.payload

    try{
        let fb = firebase.auth();

        fb.createUserWithEmailAndPassword(email, password)
        .then(() => {
            const currentUser = fb.currentUser;
    
            const db = firebase.firestore();
            db.collection("Users")
            .doc(currentUser.uid)
            .set({
                email: currentUser.email,
                name: name,
                age: age,
                state: state,
                city: city,
                phone: phone,
                username: username,
                id: currentUser.uid,
                image: image,
                favorites: [],
            });
        })
        .catch((error) => {
            let message = error.message;
            if (error.code === 'auth/email-already-in-use') {
                message = 'Este email já está sendo utilizado por outra conta.'
            } else if (error.code === 'auth/invalid-email') {
                message = 'E-mail inválido'
            }
            Alert.alert('Algo deu errado ao cadastrar usuário! ', message);
        })

        
        yield put(ProfileActions.createUserSucceeded());
    }catch(error){
        Alert.alert('Algo deu errado ao cadastrar usuário! ', error.message);
        yield put(ProfileActions.createUserFailed());
    }
}

function* login(action) {
    const { email, password } = action.payload

    try{
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)

        yield put(ProfileActions.loginSucceeded());

    }catch(error){
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

        Alert.alert('Erro ao realizar login!', message);
        yield put(ProfileActions.loginFailed());
    }
}

function* loadUserInfo(action) {
    const { email } = action.payload;
    
    try{

        let usersRef = firebase.firestore().collection('Users');

        const snapShot = yield call([
            usersRef.where('email', '==', email),
            usersRef.get,
        ]);

        let user;
        
        snapShot.forEach(document => {
            user = document.data();
        });

        RootNavigation.resetTo("Home");
        yield put(ProfileActions.loadUserSucceeded(user));
    }catch(error){
        Alert.alert('Ops!', error.message);
        yield put(ProfileActions.loadUserFailed());
    }
}

function* logout(action) {
    try{

        firebase.auth().signOut();

        RootNavigation.resetTo("Login");
        RootNavigation.closeDrawer();
        RootNavigation.drawer
        yield put(ProfileActions.logOutSucceeded());
    }catch(error){
        Alert.alert('Algo deu errado ao realizar logout!', error.message);
        yield put(ProfileActions.logOutFailed());
    }
}

function* registerPet(action) {
    const { name, species, sex, size, age, temperment, health, diseases, conditions, time, about, ownerID } = action.payload
    console.log("payload de cadastro pet", action.payload)
    try{
        const db = firebase.firestore().collection("Pets");
        db
        .doc(`${ownerID}-${Math.random()}`)
        .set({
            name: name,
            species: species,
            sex: sex,
            size: size,
            age: age,
            temperment: temperment,
            health: health,
            diseases: diseases,
            conditions: conditions,
            time: time,
            about: about,
            ownerID: ownerID,
            active: true,
            interestedUsers: 0,
            location: ''
        });

        yield put(PetActions.registerPetSucceeded());
        RootNavigation.resetTo('Home');
        Alert.alert('Cadastro de pet realizado com sucesso!');
    }catch(error){
        Alert.alert('Algo deu errado ao cadastrar o pet!', error.message);
        yield put(PetActions.registerPetFailed());
    }
}

function* listPets(action) {
    const { page, limit, userID } = action.payload;

    try{
  
        let petsRef = firebase.firestore().collection('Pets');

        const snapShot = yield call([
         petsRef.where('active', '==', true),
            petsRef.get,
        ]);  
        // if (userID !== undefined) {
        //     snapShot = yield call([
        //         petsRef.where('ownerID', '==', userID),
        //         petsRef.get,
        //     ]);
        // } else {
        // }

      let petList = [];
  
      snapShot.forEach(document => {
        petList.push(document.data());
      });

      yield put(PetActions.listPetsSucceeded(petList));
  
      }catch(error){
        Alert.alert("Falha ao buscar pets!", error.message)
        yield put(PetActions.listPetsFailed());
      }
}

function* mySaga() {
    return yield all([
        takeLatest(profileTypes.CREATE_REQUESTED, createUser),
        takeLatest(profileTypes.LOGIN_REQUESTED, login),
        takeLatest(profileTypes.LOAD_REQUESTED, loadUserInfo),
        takeLatest(profileTypes.LOGOUT_REQUESTED, logout),
        takeLatest(petTypes.REGISTER_REQUESTED, registerPet),
        takeLatest(petTypes.LIST_REQUESTED, listPets),
    ]);
}

export default mySaga;
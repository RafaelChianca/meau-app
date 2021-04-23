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
        const login = yield firebase
            .auth()
            .createUserWithEmailAndPassword(
                email,
                password,
            );
        
        let newUser = {
            email: email,
            name: name,
            age: age,
            state: state,
            city: city,
            phone: phone,
            username: username,
            id: login.user.uid,
            favorites: [],
            imageURL: ''
        }
        
        if (image) {
            const storage = firebase.storage();

            const response = yield fetch(image.uri);
            const blob = yield response.blob();

            yield storage.ref(`/imagens/${login.user.uid}`).put(blob)
            // yield storage.ref(`/imagens/${login.user.uid}`).putString(image.base64, 'base64')
            
            yield storage.ref('imagens').child(login.user.uid).getDownloadURL().then((url) => {
                newUser.imageURL = url;
            })
        }

        yield firebase
            .firestore()
            .collection('Users')
            .doc(login.user.uid)
            .set(newUser);

        Alert.alert('Cadastro realizado com sucesso!');
        yield put(ProfileActions.createUserSucceeded(newUser));
    }catch(error){
        let message = error.message;
        if (error.code === 'auth/email-already-in-use') {
            message = 'Este email já está sendo utilizado por outra conta.'
        } else if (error.code === 'auth/invalid-email') {
            message = 'E-mail inválido'
        }

        Alert.alert('Algo deu errado ao cadastrar usuário! ', message);
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
        yield put(ProfileActions.clearProfile());
        yield put(ProfileActions.logOutSucceeded());
    }catch(error){
        Alert.alert('Algo deu errado ao realizar logout!', error.message);
        yield put(ProfileActions.logOutFailed());
    }
}

function* loadNotifications(action) {
    const { userID } = action.payload;
    
    try{

        if (!userID) {
            throw new Error('Falha ao carregar notificações')
        }

        let notificationRef = firebase.firestore().collection('Notif');

        const snapShot = yield call([
            notificationRef.where('targetID', '==', userID).orderBy('timestamp', 'desc'),
            notificationRef.get,
        ]);

        let notifications = [];
        
        snapShot.forEach(document => {
            notifications.push(document.data());
        });

        
        yield put(ProfileActions.loadNotificationsSucceeded(notifications));
    }catch(error){
        Alert.alert('Ops!', error.message);
        yield put(ProfileActions.loadNotificationsFailed());
    }
}

function* clearNotifications(action) {
    const { notificationIDs, targetID, adopterID, petID } = action.payload;
    
    try{

        if (targetID && petID) {
            const db = firebase.firestore();
            
            const writeBatch = db.batch();
    
            let notificationRef = db.collection("Notif");

            let snapShot;

            if (adopterID) {
                snapShot = yield call([
                    notificationRef
                        .where('targetID', '==', targetID)
                        .where('adopterID', '==', adopterID)
                        .where('petID', '==', petID),
                    notificationRef.get,
                ]);
            } else {
                snapShot = yield call([
                    notificationRef
                        .where('targetID', '==', targetID)
                        .where('petID', '==', petID),
                    notificationRef.get,
                ]);
            }

    
            let notificationIDs = [];
        
            snapShot.forEach(document => {
                notificationIDs.push(document.data());
            });

            notificationIDs.forEach(element => {
                notificationRef = db.collection("Notif").doc(element.id);
                writeBatch.delete(notificationRef);
            });
    
            writeBatch.commit();

        } else if (!notificationIDs || (notificationIDs && notificationIDs.length === 0)) {
            throw new Error('Erro ao limpar notificações')
        } else {
            const db = firebase.firestore();
            
            const writeBatch = db.batch();
    
            let notificationRef;
    
            notificationIDs.forEach(element => {
                notificationRef = db.collection("Notif").doc(element);
                writeBatch.delete(notificationRef);
            });
    
            writeBatch.commit();
        }

        // RECARREGAR LISTA DE NOTIFICAÇÕES
        yield put(ProfileActions.clearNotificationsSucceeded());
    }catch(error){
        Alert.alert('Ops!', error.message);
        yield put(ProfileActions.clearNotificationsFailed());
    }
}

function* sendTextNotification(action) {
    const { targetID, body } = action.payload;
    
    try{

        if (targetID && body) {
            const timestamp = Math.floor(Date.now() / 1000);

            const notification = {
                acceptable: false,
                body: body,
                targetID: targetID,
                timestamp: timestamp,
                id: timestamp.toString()
            }

            yield firebase.firestore()
            .collection("Notif")
            .doc(timestamp.toString())
            .set(notification);

        } else {
            throw new Error('Erro ao enviar notificação');
        }

        yield put(ProfileActions.sendTextNotificationSucceeded());
    }catch(error){
        Alert.alert('Ops!', error.message);
        yield put(ProfileActions.sendTextNotificationFailed());
    }
}

// PET FUNCTIONS --------------------------------------------------------------

function* registerPet(action) {
    const { name, species, sex, size, age, temperment, health, diseases, conditions, time, about, ownerID, image } = action.payload
    try{
        const timestamp = Math.floor(Date.now() / 1000);

        let newPet = {
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
            interestedUsers: [],
            location: '',
            id: timestamp.toString(),
            imageURL: ''
        }

        if (image) {
            const storage = firebase.storage();

            const response = yield fetch(image.uri);
            const blob = yield response.blob();

            yield storage.ref(`/imagens/${newPet.id}`).put(blob)
            
            yield storage.ref('imagens').child(newPet.id).getDownloadURL().then((url) => {
                newPet.imageURL = url;
            })
        }

        yield firebase.firestore()
        .collection("Pets")
        .doc(timestamp.toString())
        .set(newPet);

        yield put(PetActions.registerPetSucceeded());
        yield put(PetActions.listPetsRequested());
        RootNavigation.resetTo('Home');
        Alert.alert('Cadastro de pet realizado com sucesso!');
    }catch(error){
        Alert.alert('Algo deu errado ao cadastrar o pet!', error.message);
        yield put(PetActions.registerPetFailed());
    }
}

function* listPets(action) {
    // const { page, limit, userID } = action.payload;

    try{
  
        let petsRef = firebase.firestore().collection('Pets');

        const snapShot = yield call([
        petsRef.where('active', '==', true),
            petsRef.get,
        ]);  
        // QUERY WITH OWNERID
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

function* adoptPet(action) {
    const { pet, requestingUser } = action.payload;

    try{
        if (!requestingUser.id) {
            throw new Error('Usuário não encontrado')
        }
        if (!pet.id) {
            throw new Error('Animal não encontrado')
        }

        const timestamp = Math.floor(Date.now() / 1000);

        const notification = {
            acceptable: true,
            adopterID: requestingUser.id,
            body: `${requestingUser.name} deseja adotar ${pet.name}`,
            petID: pet.id,
            targetID: pet.ownerID,
            timestamp: timestamp,
            id: timestamp.toString()
        } 

        
        yield firebase.firestore()
        .collection("Notif")
        .doc(timestamp.toString())
        .set(notification);

        Alert.alert("Pedido de adoção realizado com sucesso!")
        RootNavigation.pop()
        yield put(PetActions.adoptPetSucceeded());
    }catch(error){
        Alert.alert("Falha ao solicitar adoção pet!", error.message)
        yield put(PetActions.adoptPetFailed());
    }
}

function* acceptAdoption(action) {
    const { oldOwnerID, newOwnerID, petID } = action.payload;

    try{
        if (!newOwnerID) {
            throw new Error('Usuário não encontrado')
        }
        if (!petID) {
            throw new Error('Animal não encontrado')
        }

        yield firebase.firestore()
        .collection("Pets")
        .doc(petID)
        .update({
            ownerID: newOwnerID,
            interestedUsers: [],
        });

        yield put(ProfileActions.clearNotificationsRequested(null, oldOwnerID, null, petID));
        yield put(ProfileActions.sendTextNotificationRequested(newOwnerID, 'Seu pedido de adoção foi aceito!'));
        yield put(PetActions.listPetsRequested());
        yield put(PetActions.acceptAdoptionSucceeded());
        Alert.alert("Pedido de adoção aprovado com sucesso!");
    }catch(error){
        Alert.alert("Falha ao aprovar pedido de adoção!", error.message)
        yield put(PetActions.acceptAdoptionFailed());
    }
}

function* declineAdoption(action) {
    const { oldOwnerID, newOwnerID, petID } = action.payload;

    try{
        if (!newOwnerID) {
            throw new Error('Usuário não encontrado')
        }

        yield put(ProfileActions.clearNotificationsRequested(null, oldOwnerID, newOwnerID, petID));
        yield put(ProfileActions.sendTextNotificationRequested(newOwnerID, 'Seu pedido de adoção foi recusado.'));
        yield put(PetActions.declineAdoptionSucceeded());
        // Alert.alert("Pedido de adoção recusado com sucesso!");
    }catch(error){
        Alert.alert("Falha ao recusar pedido de adoção!", error.message)
        yield put(PetActions.declineAdoptionFailed());
    }
}

function* mySaga() {
    return yield all([
        takeLatest(profileTypes.CREATE_REQUESTED, createUser),
        takeLatest(profileTypes.LOGIN_REQUESTED, login),
        takeLatest(profileTypes.LOAD_REQUESTED, loadUserInfo),
        takeLatest(profileTypes.LOGOUT_REQUESTED, logout),
        takeLatest(profileTypes.LOAD_NOTIFICATIONS_REQUESTED, loadNotifications),
        takeLatest(profileTypes.SEND_TEXT_NOTIFICATION_REQUESTED, sendTextNotification),
        takeLatest(profileTypes.CLEAR_NOTIFICATIONS_REQUESTED, clearNotifications),
        takeLatest(petTypes.REGISTER_REQUESTED, registerPet),
        takeLatest(petTypes.LIST_REQUESTED, listPets),
        takeLatest(petTypes.ADOPT_REQUESTED, adoptPet),
        takeLatest(petTypes.ACCEPT_ADOPTION_REQUESTED, acceptAdoption),
        takeLatest(petTypes.DECLINE_ADOPTION_REQUESTED, declineAdoption),
    ]);
}

export default mySaga;
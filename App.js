import React from 'react';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import AppStack from './src/routes/AppStack';
import { store } from './src/store';
import firebaseConfig from './src/config/keys';

export default function App() {
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}

import * as firebase from 'firebase';
import { appConfig } from './config.ts';

const config = {
  apiKey: appConfig.apiKey,
  authDomain: appConfig.authDomain,
  databaseURL: appConfig.databaseURL,
  projectId: appConfig.projectId,
  storageBucket: appConfig.storageBucket,
  messagingSenderId: appConfig.messagingSenderId
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
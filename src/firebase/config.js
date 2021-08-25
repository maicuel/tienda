import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: 'AIzaSyDIV1DwURtiFmARHPwsxntGI7ecoObfxXo',
  authDomain: 'react-animales-michael.firebaseapp.com',
  projectId: 'react-animales-michael',
  storageBucket: 'react-animales-michael.appspot.com',
  messagingSenderId: '919456584079',
  appId: '1:919456584079:web:6208f102d57da421d37bfa'
};

const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}

export const database = firebase.firestore();



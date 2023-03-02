// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFunctions } from 'firebase/functions';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDHS0IfSBpqBNKSv4dQStbZ1dd0FbJccg",
  authDomain: "dylan-knight-7b15e.firebaseapp.com",
  projectId: "dylan-knight-7b15e",
  storageBucket: "dylan-knight-7b15e.appspot.com",
  messagingSenderId: "1022398848750",
  appId: "1:1022398848750:web:7e561db65b73648f0a9dff"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const functions = getFunctions(app)

export { functions }
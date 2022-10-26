import { initializeApp } from '@firebase/app';
import firebase from './firebase'
import {getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyArmxx7V-9_lUFWfVLVOGLIySAl9aLBjzs",
    authDomain: "whatsapp-fbdc5.firebaseapp.com",
    projectId: "whatsapp-fbdc5",
    storageBucket: "whatsapp-fbdc5.appspot.com",
    messagingSenderId: "1084732049442",
    appId: "1:1084732049442:web:2baa049909ae427282e27b"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()
const provider = new GoogleAuthProvider(GoogleAuthProvider)

export {db, auth, provider }

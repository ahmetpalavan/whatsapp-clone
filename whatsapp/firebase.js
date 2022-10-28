import { initializeApp } from '@firebase/app';
import {getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, sign, signInWithPopup } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyArmxx7V-9_lUFWfVLVOGLIySAl9aLBjzs",
    authDomain: "whatsapp-fbdc5.firebaseapp.com",
    projectId: "whatsapp-fbdc5",
    storageBucket: "whatsapp-fbdc5.appspot.com",
    messagingSenderId: "1084732049442",
    appId: "1:1084732049442:web:2baa049909ae427282e27b"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore()
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
}


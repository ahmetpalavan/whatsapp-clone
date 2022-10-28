import '../styles/globals.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import Login from './login'
import { Loading } from '../components'
import { useEffect } from 'react'
import { serverTimestamp,collection,addDoc } from 'firebase/firestore'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [user,loading] = useAuthState(auth);
  useEffect(()=>{
    if(user){
      addDoc(collection(db,'users'),{
        email:user.email,
        lastSeen:serverTimestamp(),
        photoURL:user.photoURL,
      },{merge:true})
    }
  })
  if(loading) return <Loading/>
  if(!user) return <Login/>
  return <Component {...pageProps} />
}

export default MyApp

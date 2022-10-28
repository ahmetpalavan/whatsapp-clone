import '../styles/globals.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import Login from './login'
import { Loading } from '../components'
import { collection, onSnapshot } from 'firebase/firestore'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [user,loading] = useAuthState(auth);
  useEffect(()=>{
    if(user){
      onSnapshot(collection(db,"users"),(snapshot)=>{
        (snapshot.docs.map((user)=>{
          return{
            email: user.email,
            lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
            photoURL: user.photoURL
          },{merge:true}
        }))
      })
    }
  },[user])
  if(loading) return <Loading/>
  if(!user) return <Login/>
  return <Component {...pageProps} />
}

export default MyApp

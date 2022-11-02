import { collection, orderBy } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, db } from '../firebase'
import EndOfMessage from './EndOfMessage'
import Message from './Message'

const MessageContainer = () => {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const [messagesSnapshot] = useCollection(collection(db, 'chats', router.query.id, 'messages'), orderBy('timestamp', 'asc'))
  const showMessages = ( ) =>{
    if(messagesSnapshot) {
        return messagesSnapshot.docs.map(message => (
            <Message
            key={message.id}
            user={message.data().user}
            message={{ ...message.data(), timestamp: message.data().timestamp?.toDate().getTime() }}
            />
        ))
    }
}
  return (
    <div className='p-7 bg-[#e5ded8] min-h-screen'>
      {showMessages()}
      <EndOfMessage/>
    </div>
  )
}

export default MessageContainer
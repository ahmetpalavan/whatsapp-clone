import { collection, doc, getDocs, orderBy, query } from 'firebase/firestore'
import Head from 'next/head'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ChatContainer, ChatScreen, Sidebar } from '../../components'
import { auth, db } from '../../firebase'
import getRecipientEmail from '../../utils/getRecipientEmail'

const Chats = ({chat, messages}) => {
    const [user] = useAuthState(auth)
return (
    <div className='flex'>
        <Head>
            <title>Chat with {getRecipientEmail(chat.users, user)}</title>
        </Head>
        <Sidebar/>
        <ChatContainer>
        <ChatScreen chat={chat} messages={messages}/>
        </ChatContainer>
    </div>
)
}

export default Chats

export async function getServerSideProps(context){
    const ref = collection(db, 'chats', context.query.id, 'messages')
    const messagesRes = await getDocs(query(ref, orderBy('timestamp', 'asc')))
    const messages = messagesRes.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })).map(messages => ({
        ...messages,
        timestamp: messages.timestamp.toDate().getTime()
    }))
    const chatRes = await getDocs(collection(db, 'chats')) 
    const chat = {
        id: chatRes.docs[0]?.id, 
        ...chatRes.docs[0]?.data()
    }
    return{
        props: {
            messages: JSON.stringify(messages),
            chat: chat,
        }
    }
}

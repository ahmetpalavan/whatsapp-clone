import { Avatar } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import MessageContainer from './MessageContainer'
import EndOfMessage from './EndOfMessage'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy } from 'firebase/firestore'
import Message from './Message'
import InputContainer from './InputContainer'

const ChatScreen = (props) => {
    const {chat, messages} = props
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
    <div>
        <header className='sticky z-[100] top-0 flex p-3 items-center h-[80px] border-b-[1px] border-solid'>
            <Avatar/>
            <div className='flex-1 ml-4'>
                <h3 className='mb-[3px] font-medium' >Recipient Email</h3>
                <p className='text-[14px] text-gray-800'>Last seen...</p>
            </div>
            <div>
                <button>
                    <AttachFileIcon/>
                </button>
                <button>
                    <MoreVertIcon/>
                </button>
            </div>
        </header>
            <MessageContainer>
                {showMessages()}
                <EndOfMessage/>
            </MessageContainer>
            <InputContainer/>
    </div>
)
}

export default ChatScreen
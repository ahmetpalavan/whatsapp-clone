import React from 'react'
import {Button} from "@mui/material"
import * as EmailValidator from 'email-validator'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import {useCollection} from 'react-firebase-hooks/firestore'
import Chat from './Chat';
const SidebarButton = () => {
    const [user] = useAuthState(auth);
    const userChatRef = collection(db,"chats",`{user.email}`,`chats`)
    const [chatsSnapshot] = useCollection(userChatRef);
    const createChat = () =>{
        const input = prompt('Please enter an email address for the user you wish to chat with');
        if(!input) return null;
        if(EmailValidator.validate(input) && !chatAlreadyExists(input) && input !== user.email) {
            // we need to add the chat into the DB 'chats' collection if it doesn't already exist and is valid
            addDoc(collection(db,'chats'),{
                users:[user.email,input]
            })
        }
    }
    const chatAlreadyExists = (recipientEmail) => {
        !!chatsSnapshot?.docs.find((chat) => chat.data().users.find((user) => user === recipientEmail)?.length > 0)
    }
return (
    <div>
        <Button onClick={createChat} className='w-full border-t-[1px] border-b-[1px] text-black border-solid border-[#f5f5f5]'>Start a new chat</Button>
        <Chat/>
    </div>
)
}

export default SidebarButton
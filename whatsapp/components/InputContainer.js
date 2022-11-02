import { InsertEmoticon, Mic  } from '@mui/icons-material'
import { collection, doc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { db } from '../firebase'

const InputContainer = () => {
    const [input, setInput] = useState("")
    const router = useRouter()
    const sendMessage = (e) => {
        e.preventDefault()
        db.collection('chats').doc(router.query.id).collection('messages').add({
            lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        },{merge:true})
        db.collection('chats').doc(router.query.id).set({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: 'Mehmet',
            photoURL: ''
        })
        setInput("")
    }
return (
    <div className='flex items-center p-[10px] sticky bottom-0 z-[100] bg-white '>
        <InsertEmoticon/>
        <input value={input} onChange={e=>setInput(e.target.value)} type='form' placeholder='Type a message' className='flex-1 items-center  sticky bottom-0 outline-0 border-none border-r-[10px] 
        bg-gray-100 mr-[15px] ml-[15px] p-3 rounded-lg'/>
        <button type='submit' className='hidden'disabled={!input} onClick={sendMessage} >Send Message</button>
        <Mic/>
    </div>
)
}

export default InputContainer
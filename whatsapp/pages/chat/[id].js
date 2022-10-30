import Head from 'next/head'
import React from 'react'
import { ChatContainer, ChatScreen, Sidebar } from '../../components'

const Chats = () => {
return (
    <div className='flex'>
        <Head>
            <title>Chat</title>
        </Head>
        <Sidebar/>
        <ChatContainer>
        <ChatScreen/>
        </ChatContainer>
    </div>
)
}

export default Chats
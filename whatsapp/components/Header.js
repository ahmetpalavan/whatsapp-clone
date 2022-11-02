import { Avatar, IconButton } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <header className='flex sticky top-0 bg-white z-0 z-1 justify-between
        items-center p-4 h-20 border-b-[1px] border-solid'>
            <Avatar  onClick={()=>auth.signOut()} alt='Ahmet Palavan' className='cursor-pointer hover:opacity-80' src={user?.photoURL}/>
            <div>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </header>
)
}

export default Header
import { Avatar, IconButton } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'

const Header = () => {
    return (
        <header className='flex sticky top-0 bg-white z-0 z-1 justify-between
        items-center p-4 h-20 border-b border-solid'>
            <Avatar alt='Ahmet Palavan' className='cursor-pointer hover:opacity-80' src='/static/images/avatar/1.jpg'/>
            <iconscontainer>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </iconscontainer>
        </header>
)
}

export default Header
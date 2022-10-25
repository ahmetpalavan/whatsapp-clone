import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container } from '@mui/system'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
    return (
        <div className="bg-red-300">
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
            <div className='flex'>
                <SearchIcon/>
                <input placeholder='Search in chats' className='pl-1 font-bold outline-none rounded-lg'/>
            </div>
        </div>
)
}

export default Sidebar
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container } from '@mui/system'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Search from './Search';
import Header from './Header';
import SidebarButton from './SidebarButton';
import Login from '../pages/login';

function Sidebar() {
    return (
        <div>
            <Header/>
            <Search/>
            <SidebarButton/>
        </div>
)
}

export default Sidebar
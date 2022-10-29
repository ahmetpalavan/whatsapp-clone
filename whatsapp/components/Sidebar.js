import Search from './Search';
import Header from './Header';
import SidebarButton from './SidebarButton';
import Chat from './Chat';

function Sidebar({chatsSnapshot}) {
    return (
        <div>
            <Header/>
            <Search/>
            <SidebarButton/>
            {chatsSnapshot?.docs.map((chat) => (
                <Chat key={chat.id} id={chat.id} users={chat.data().users}/>
            ))}
        </div>
)
}

export default Sidebar
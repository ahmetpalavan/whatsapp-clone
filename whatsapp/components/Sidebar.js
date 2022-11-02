import Search from './Search';
import Header from './Header';
import SidebarButton from './SidebarButton';
import Chat from './Chat';

function Sidebar({chatsSnapshot}) {
    return (
        <div className='flex-[0.45] border-r h-screen min-w-[300px] max-w-[350px] overflow-y-scroll scrollbar'>
            <Header/>
            <Search/>
            <SidebarButton/>
            {/* List of Chats */}
            {chatsSnapshot?.docs.map(chat => (
                <Chat key={chat.id} id={chat.id} users={chat.data().users}/>
            ))}
        </div>
)
}

export default Sidebar
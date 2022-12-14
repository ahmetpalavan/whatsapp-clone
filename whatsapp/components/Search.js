import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

const Search = () => {
    return (
    <div className='flex items-center p-5 text-center'>
        <SearchIcon/>
        <input placeholder='Search in chats' className='flex-1 outline-none  border-none' />
    </div>
)
}

export default Search
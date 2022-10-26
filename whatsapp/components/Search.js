import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

const Search = () => {
    return (
    <div className='flex items-center p-5 border-r-2'>
        <SearchIcon/>
        <input placeholder='Search in chats' className='flex-1 outline-none border-none' />
    </div>
)
}

export default Search
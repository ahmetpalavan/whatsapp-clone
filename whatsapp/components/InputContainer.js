import { InsertEmoticon } from '@mui/icons-material'
import React from 'react'

const InputContainer = () => {
return (
    <div className='flex items-center p-[10px] sticky bottom-0 z-[100] bg-white'>
        <InsertEmoticon/>
        <input type='form' placeholder='Type a message' className='flex-1 outline-0 border-none border-r-[10px] 
        bg-gray-200'/>
    </div>
)
}

export default InputContainer
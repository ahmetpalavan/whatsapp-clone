import React from 'react'
import {Button} from "@mui/material"
import * as EmailValidator from 'email-validator'
const SidebarButton = () => {
    const createChat = () =>{
        const input = prompt('Please enter an email address for the user you wish to chat with');
        if(!input) return null;
        if(EmailValidator.validate(input)) {
            
        }
    }
return (
    <div>
        <Button onClick={createChat} className='w-full border-t-[1px] border-b-[1px] text-black border-solid border-[#f5f5f5]'>Start a new chat</Button>
    </div>
)
}

export default SidebarButton
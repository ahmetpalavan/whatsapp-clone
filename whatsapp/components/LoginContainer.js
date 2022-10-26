import { Button} from '@mui/material'
import Image from 'next/image'
import React from 'react'

const LoginContainer = () => {
return (
    <div className='flex flex-col'>
        <img className='h-[200px] w-[200px]'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png'
        />
        <Button variant='outlined'>Sign in with Google</Button>
    </div>
)
}

export default LoginContainer
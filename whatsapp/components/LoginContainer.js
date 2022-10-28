import { Button} from '@mui/material'
import { bgcolor, Container } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import { auth, provider,signInWithGoogle } from '../firebase'

const LoginContainer = () => {

return (
    <Container  sx={{display:"grid", placeItems:"center",height:"100vh",bgcolor:"whitesmoke"}} >
    <div className='flex flex-col items-center bg-white p-[100px] shadow-[0_4px_14px_-3px_rgba(0,0,0,0.7)]'>
        <img className='h-[200px] w-[200px] mb-[50px]'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png'
        />
        <Button onClick={signInWithGoogle} variant='outlined'>Sign in with Google</Button>
    </div>
    </Container>
)
}

export default LoginContainer
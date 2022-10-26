import { Container } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import LoginContainer from '../components/LoginContainer'

const Login = () => {
return (
    <Container className='h-full'>
        <Head>
            <title>Login</title>
        </Head>
        <LoginContainer/>
    </Container>
)
}

export default Login
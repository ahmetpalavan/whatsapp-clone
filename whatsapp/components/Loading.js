import Image from 'next/image'
import React from 'react'
import {Circle} from 'better-react-spinkit'
const Loading = () => {
return (
    <center className="grid items-center h-screen">
        <div>
            <Image className='mb-10'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png'
            height={200}
            width={200}/>
            <Circle color="#3cbc28" size={60}/>
        </div>
    </center>
)
}

export default Loading
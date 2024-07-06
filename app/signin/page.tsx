
"use client"
import { signIn, signOut } from 'next-auth/react'
import React from 'react'

type Props = {}

const signin = (props: Props) => {
    return (
        <div className='flex justify-center flex-col items-center h-screen'>
            signin
            <div className='flex gap-2'>
                <button className='bg-white text-black p-2   rounded-md' onClick={() => signIn()}>signin</button>
                <button className='bg-white text-black p-2   rounded-md' onClick={() => signOut()}>logout</button>
            </div>
        </div>
    )
}

export default signin
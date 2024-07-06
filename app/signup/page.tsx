import { signOut } from 'next-auth/react'
import React from 'react'

type Props = {}

const signup = (props: Props) => {
    return (
        <div className='flex justify-center items-center h-screen'>
            signup
            <button onClick={() => signOut}>logout</button>
        </div>
    )
}

export default signup
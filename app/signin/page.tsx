"use client"
import Label from '@/components/ui/Label'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { useRouter } from "next/navigation"


const Signin = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const router = useRouter()
    return (
        <div className='flex justify-center flex-col items-center h-screen'>
            signin
            <div className='flex gap-2 flex-col'>
                <Label label='email' onChange={(e) => {
                    setUser({
                        ...user,
                        email: e.target.value
                    })
                }} />
                <Label label='password' type='password' onChange={(e) => {
                    setUser({
                        ...user,
                        password: e.target.value
                    })
                }} />
                <button className='bg-white text-black p-2   rounded-md' onClick={() => {
                    signIn(
                        "credentials", {
                        email: user.email,
                        password: user.password,
                        redirect: false
                    }
                    )
                    router.push("/home")
                }}>signin</button>
                <button className='bg-neutral-600 rounded-md p-2' onClick={async () => {
                    await signIn("google");
                }}>Login with google</button>
                <button className='bg-neutral-600 rounded-md p-2' onClick={async () => {
                    await signIn("github");
                }}>Login with Github</button>

            </div>
        </div>
    )
}

export default Signin
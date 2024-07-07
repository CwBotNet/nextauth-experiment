"use client"
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Logout() {
    const router = useRouter()
    return (
        <button className='bg-white text-black p-2   rounded-md' onClick={() => {
            signOut({
                redirect: false
            })
            router.push('/signin')
        }}>logout</button>
    )
}
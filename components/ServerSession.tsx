"use server"
import { NEXT_AUTH_CONFIG } from '@/lib/auth'
import { getServerSession } from 'next-auth'

// get user form server side
async function getUser() {
    const session = await getServerSession(NEXT_AUTH_CONFIG)
    return session
}

const ServerSession = async () => {
    const session = await getUser()
    // console.log(session)
    return (
        <div >
            <h1 className=''>
                {session ? JSON.stringify(session) : "failed"}
            </h1>
        </div>
    )
}

export default ServerSession

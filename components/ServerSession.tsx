import { getServerSession } from 'next-auth'

// get user form server side
async function getUser() {
    const session = await getServerSession()
    return session
}

const ServerSession = async () => {
    const session = await getUser()
    return (
        <div >
            <h1>
                {session ? JSON.stringify(session) : "failed"}
            </h1>
        </div>
    )
}

export default ServerSession

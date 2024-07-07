import ServerSession from "@/components/ServerSession";
import Session from "@/components/Session";
import Logout from "@/components/ui/LogoutBtn";

export default async function User() {


  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex gap-x-2">
        Client session: <Session />
      </div>
      <div className="flex gap-x-2">
        Server Session:
        <ServerSession />
      </div>

      <Logout />

    </div>
  )
}
import ServerSession from "@/components/ServerSession";
import Session from "@/components/Session";

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-4 ">
      next auth
      <ServerSession />
      <Session />
    </div>
  );
}

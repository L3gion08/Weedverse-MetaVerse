import Head from "next/head"
import Login from "../components/Login"
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();
  console.log({ isAuthenticated });
  if(!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-green-900">
      <Head>
        <title>Metaverse Challenge</title>
      </Head>

        <div className="max-w-2xl mx-auto">
          <Header />
          <Messages />
        </div>
    </div>
  )
}

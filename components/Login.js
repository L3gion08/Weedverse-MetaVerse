import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
    const { authenticate } = useMoralis();
    return (
        <main className="bg-black relative text-white">
            <h2>I am a Login screen</h2>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                <Image
                    className="object-cover rounded-full" 
                    src="https://links.papareact.com/55n"
                    alt="Sideways headshot of a young man with a beard in a x-ray like style"
                    width={200}
                    height={200}
                />
                <button onClick={authenticate} className="bg-green-500 rounded-lg p-5 font-bold animate-pulse">Login to the METAVERSE</button>
            </div>
            <div className="w-full h-screen">
                <Image 
                    src="https://links.papareact.com/55n" 
                    alt="Futurisitic geometrical landscape with mountain like structure on the left and right and a straight clear path in the middle"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </main>
    )
}

export default Login;

import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
    const { user } = useMoralis();
    return (
        <header className="sticky top-0 p-5 z-50 bg-black text-green-500 shadow-sm border-b-2 border-green-700">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image 
                        className="rounded-full"
                        src="https://links.papareact.com/55n"
                        alt="Sideways headshot of a young man with a beard in a x-ray like style"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="col-span-4 text-left lg:text-center">
                    <div className="relative h-48 w-48 lg:mx-auto border-green-500 border-8 rounded-full">
                        <Avatar logoutOnPress />
                    </div>
                    <h1 className="text-3xl">Welcome to the WeedVerse!</h1>
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
                    
                    <ChangeUsername />
                </div>
            </div>
        </header>
    )
}

export default Header;
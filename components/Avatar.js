import Image from "next/image";
import { useMoralis } from "react-moralis";

const Avatar = ({ username, logoutOnPress }) => {
    const { user, logout } = useMoralis();
    return (
        <Image
            className="rounded-full bg-black cursor-pointer hover:opacity-75"
            src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`}
            alt="randomly generated pixelated animated avatar from dicebear.com"
            layout="fill"
            onClick={() => logoutOnPress && logout()}
        />
    )
}

export default Avatar;
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { SafeUser } from "../types";

interface LogoProps {
  currentUser?: SafeUser | null;
}

const Logo: React.FC<LogoProps> = ({ currentUser }) => {
  const router = useRouter();
  const homeUrl = currentUser ? "/listings" : "/";

  return (
    <div
      onClick={() => router.push(homeUrl)}
      className="flex flex-row items-end cursor-pointer"
    >
      <Image src="/images/logo.png" alt="logo" height={35} width={35} />
      <div className="hidden md:block text-xl font-extrabold">HOMR</div>
    </div>
  );
};

export default Logo;

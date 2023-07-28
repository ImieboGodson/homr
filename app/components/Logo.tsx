"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="flex flex-row items-end cursor-pointer"
    >
      <Image src="/images/logo.png" alt="logo" height={35} width={35} />
      <div className="text-xl font-extrabold">HOMR</div>
    </div>
  );
};

export default Logo;

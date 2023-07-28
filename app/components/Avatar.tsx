"use client";

import Image from "next/image";

interface AvatarProps {
  userImage?: string;
}

const Avatar: React.FC<AvatarProps> = ({ userImage }) => {
  return (
    <Image
      src={userImage || "/images/user.png"}
      alt="user avatar"
      height={30}
      width={30}
      className="rounded-full overflow-hidden cursor-pointer"
    />
  );
};

export default Avatar;

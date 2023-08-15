"use client";

import Image from "next/image";

interface AvatarProps {
  userImage: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ userImage }) => {
  return (
    <Image
      src={userImage || "/images/user.png"}
      alt="user avatar"
      height={33}
      width={33}
      className="rounded-full overflow-hidden cursor-pointer"
    />
  );
};

export default Avatar;

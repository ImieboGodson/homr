"use client";

import Link from "next/link";
import { IconType } from "react-icons/lib";

interface SocialButtonProps {
  link: string;
  icon: IconType;
}

const SocialButton: React.FC<SocialButtonProps> = ({ link, icon: Icon }) => {
  return (
    <Link href={link} target="blank" className="p-2 cursor-pointer">
      <Icon size={12} />
    </Link>
  );
};

export default SocialButton;

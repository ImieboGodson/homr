"use client";

import { IconType } from "react-icons/lib";

interface SocialButtonProps {
  onClick: () => void;
  label: string;
  icon: IconType;
  disabled: boolean;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  onClick,
  label,
  icon: Icon,
  disabled,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-full flex flex-row justify-center items-center py-3 text-lg text-black border-black hover:bg-neutral-100 ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
    >
      <Icon size={18} className="absolute left-4" />
      {label}
    </div>
  );
};

export default SocialButton;

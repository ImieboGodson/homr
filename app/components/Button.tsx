"use client";

import { IconType } from "react-icons/lib";

interface ButtonProps {
  title: string;
  onClick: () => void;
  outline?: boolean;
  primary?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  icon: Icon,
  outline,
  primary,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-full py-2.5 flex flex-row gap-1 justify-center items-center text-sm border rounded-md cursor-pointer ${
        primary
          ? "bg-[#EF6262] font-bold text-white border-[#EF6262]"
          : `${
              !outline
                ? "bg-black text-white border-white"
                : "bg-white text-black border-black"
            }`
      }`}
    >
      {title}
      {Icon && <Icon size={18} />}
    </div>
  );
};

export default Button;

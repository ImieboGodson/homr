"use client";

import { IconType } from "react-icons/lib";

interface ButtonProps {
  title: string;
  onClick: () => void;
  outline?: boolean;
  primary?: boolean;
  icon?: IconType;
  authType?: boolean;
  socialLogin?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  icon: Icon,
  authType,
  outline,
  primary,
  socialLogin,
}) => {
  return (
    <div
      onClick={onClick}
      className={` relative w-full flex flex-row gap-1 justify-center items-center  font-semibold ${
        authType ? "py-3 text-lg" : "py-2.5 text-sm"
      } border rounded-md cursor-pointer ${
        primary
          ? "bg-[#EF6262] font-bold text-white border-[#EF6262]"
          : `${
              !outline
                ? "bg-black text-white border-black hover:bg-neutral-900"
                : "bg-white text-black border-black hover:bg-neutral-100"
            }`
      }`}
    >
      {Icon && socialLogin && <Icon size={18} className="absolute left-4" />}
      {title}
      {Icon && !authType && !socialLogin && <Icon size={18} />}
    </div>
  );
};

export default Button;

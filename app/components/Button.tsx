"use client";

import { IconType } from "react-icons/lib";

interface ButtonProps {
  title: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  outline?: boolean;
  primary?: boolean;
  icon?: IconType;
  authType?: boolean;
  socialLogin?: boolean;
  navType?: boolean;
  noBorder?: boolean;
  favoriteButton?: boolean;
  isFavorited?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  icon: Icon,
  authType,
  outline,
  primary,
  socialLogin,
  navType,
  noBorder,
  favoriteButton,
  isFavorited,
}) => {
  return (
    <div
      onClick={onClick}
      className={` relative w-full flex flex-row gap-1 justify-center items-center  font-bold ${
        authType
          ? "py-3 text-lg"
          : `${navType ? "text-base" : "text-sm"} py-2.5`
      }  border rounded-md cursor-pointer ${
        primary
          ? "bg-[#EF6262] font-bold text-white border-[#EF6262] text-sm"
          : `${
              outline
                ? "bg-white text-black border-black hover:bg-neutral-100"
                : `${
                    noBorder
                      ? "bg-white border-white text-black underline hover:bg-neutral-100"
                      : "bg-black text-white border-black hover:bg-neutral-900"
                  }`
            }`
      }`}
    >
      {Icon && socialLogin && <Icon size={18} className="absolute left-4" />}
      {Icon && !socialLogin && favoriteButton && (
        <Icon
          size={18}
          className={`${isFavorited ? "fill-red-500" : "fill-black"}`}
        />
      )}
      {title}
      {Icon && !authType && !socialLogin && !favoriteButton && (
        <Icon size={18} />
      )}
    </div>
  );
};

export default Button;

"use client";

import { IconType } from "react-icons/lib";

interface UserTypeSelectProps {
  icon: IconType;
  label: string;
  subtitle: string;
  onClick: (value: string) => void;
  selected: boolean;
}

const UserTypeSelect: React.FC<UserTypeSelectProps> = ({
  icon: Icon,
  label,
  subtitle,
  onClick,
  selected,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`w-full py-8 px-4 flex flex-col gap-4 items-center justify-center  border-2 ${
        selected
          ? "bg-black text-white border-black shadow-lg"
          : "bg-white text-black"
      } rounded-xl transition cursor-pointer`}
    >
      <div
        className={`rounded-full p-3.5  ${
          selected ? "bg-white text-black" : "border bg-neutral-100 text-black"
        }`}
      >
        <Icon size={28} />
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="text-2xl font-bold">{label}</div>
        <div className="text-sm">{subtitle}</div>
      </div>
    </div>
  );
};

export default UserTypeSelect;

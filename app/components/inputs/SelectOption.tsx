"use client";

import { IconType } from "react-icons/lib";

interface SelectOptionProps {
  onClick: (value: string) => void;
  label: string;
  subtitle?: string;
  icon: IconType;
  selected: boolean;
  categorySelect?: boolean;
  small?: boolean;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  onClick,
  label,
  subtitle,
  icon: Icon,
  selected,
  categorySelect,
  small,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`transition w-full h-full ${
        small ? "px-4 py-5" : "px-8 py-6"
      } flex ${
        small
          ? "gap-3 flex-col items-start justify-between leading-3"
          : "flex-row justify-between items-center"
      }  rounded-lg border  hover:outline hover:outline-black hover:outline-[1.6px] hover:outline-offset-0 hover:border-black ${
        selected
          ? "outline bg-neutral-100 outline-black outline-[1.6px] outline-offset-0 border-black"
          : "bg-white border-gray-300 outline-none"
      } cursor-pointer`}
    >
      <div
        className={`flex flex-col gap-1 items-start ${
          small ? "order-2" : "order-1"
        }`}
      >
        <div className={`${small ? "text-base" : "text-xl"} font-bold`}>
          {label}
        </div>
        {subtitle && <div className="text-sm font-light ">{subtitle}</div>}
      </div>
      <div
        className={`p-2 rounded-lg ${small ? "order-1" : "order-2"} ${
          categorySelect ? "border bg-neutral-100" : "bg-white"
        }`}
      >
        <Icon className={`${small ? "text-2xl" : "text-3xl"}`} />
      </div>
    </div>
  );
};

export default SelectOption;

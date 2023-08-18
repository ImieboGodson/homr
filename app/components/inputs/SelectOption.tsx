"use client";

import { IconType } from "react-icons/lib";

interface SelectOptionProps {
  onClick: (value: string) => void;
  label: string;
  subtitle?: string;
  icon: IconType;
  selected: boolean;
  categorySelect?: boolean;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  onClick,
  label,
  subtitle,
  icon: Icon,
  selected,
  categorySelect,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`transition w-full px-8 py-6 flex flex-row justify-between items-center  rounded-lg border  hover:outline hover:outline-black hover:outline-[1.6px] hover:outline-offset-0 hover:border-black ${
        selected
          ? "outline bg-neutral-100 outline-black outline-[1.6px] outline-offset-0 border-black"
          : "bg-white border-gray-300 outline-none"
      } cursor-pointer`}
    >
      <div className="flex flex-col gap-1 items-start">
        <div className="text-xl font-bold">{label}</div>
        {subtitle && <div className="text-sm font-light ">{subtitle}</div>}
      </div>
      <div
        className={`p-2 rounded-lg ${
          categorySelect ? "border bg-neutral-100" : "bg-white"
        }`}
      >
        <Icon size={30} />
      </div>
    </div>
  );
};

export default SelectOption;

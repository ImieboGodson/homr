"use client";

import { FaCheck } from "react-icons/fa6";

interface CheckboxProps {
  onClick: (value: string) => void;
  label: string;
  selected: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ onClick, label, selected }) => {
  return (
    <div
      onClick={() => onClick(label)}
      className="group flex flex-row gap-3 items-start  cursor-pointer"
    >
      <div
        className={`w-7 h-7 flex flex-row justify-center items-center border rounded-md ${
          selected ? "bg-black text-white border-black" : "bg-white"
        } group-hover:border-black transition`}
      >
        {selected && <FaCheck size={16} />}
      </div>
      <div className="text-lg font-normal text-neutral-700">{label}</div>
    </div>
  );
};

export default Checkbox;

"use client";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle?: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const handleMinus = () => {
    if (value === 1) {
      return;
    }

    return onChange(value - 1);
  };
  return (
    <div className="w-full py-4 flex flex-row justify-between items-center">
      <div className="flex flex-col items-start">
        <div className="text-lg font-normal">{title}</div>
        <div className="text-sm text-neutral-400">{subtitle}</div>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <div
          onClick={handleMinus}
          className="p-3 rounded-full border text-neutral-500 cursor-pointer"
        >
          <AiOutlineMinus size={16} />
        </div>
        <div className="text-lg">{value}</div>
        <div
          onClick={() => onChange(value + 1)}
          className="p-3 rounded-full border text-neutral-500 cursor-pointer"
        >
          <AiOutlinePlus size={16} />
        </div>
      </div>
    </div>
  );
};

export default Counter;

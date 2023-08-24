"use client";

import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import { FaDollarSign, FaPencilAlt } from "react-icons/fa";

interface PriceInputProps {
  id: string;
  value: number;
  defaultValue: number;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isDisabled?: boolean;
  required?: boolean;
}

const PriceInput: React.FC<PriceInputProps> = ({
  id,
  value,
  defaultValue,
  register,
  errors,
  isDisabled,
  required,
}) => {
  const [inputValue, setInputValue] = useState<number>(0);
  const currentValue = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value <= 0) {
      return;
    }

    setInputValue(value);
  }, [value]);

  const handleClick = useCallback(() => {
    if (inputRef.current === null) {
      return;
    }

    // console.log("INPUT VALUE:", inputRef.current.value);
    inputRef.current.focus();
  }, []);

  return (
    <div className="w-fit group p-0 flex flex-row items-center justify-center overflow-hidden">
      <div className="h-[120px] w-fit">
        <FaDollarSign size={120} className="w-[70px]" />
      </div>
      <div className="relative peer w-full h-[120px] pr-1 text-9xl font-extrabold overflow-x-auto overflow-y-hidden">
        {value}
        <input
          id={id}
          type="number"
          value={inputValue}
          {...register(id, { required })}
          // ref={inputRef}
          defaultValue={defaultValue}
          disabled={isDisabled}
          height={120}
          inputMode="numeric"
          autoComplete="off"
          autoFocus
          className={`absolute top-0 bottom-0 right-0 left-0 p-0 outline-none text-9xl font-extrabold bg-transparent`}
        />
      </div>
      <div className="h-[120px] flex flex-col justify-end">
        <div
          onClick={handleClick}
          className="p-2 rounded-full border cursor-pointer peer-focus-within:hidden group-focus-within:hidden"
        >
          <FaPencilAlt size={15} />
        </div>
      </div>
    </div>
  );
};

export default PriceInput;

"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label?: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isDisabled?: boolean;
  required?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  register,
  errors,
  isDisabled,
  required,
  placeholder,
}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && <label className="font-bold">{label}</label>}
      <input
        id={id}
        {...register(id, { required })}
        placeholder={placeholder || "type something"}
        type={type}
        disabled={isDisabled}
        className={`w-full px-2 py-[6.5px] placeholder:text-sm placeholder:text-gray-500 placeholder:font-normal bg-white border-[1px] border-gray-300 rounded outline-none focus:outline focus:outline-black focus:outline-[1.4px] focus:outline-offset-0 focus:border-black transition disabled:opacity-70 disabled:cursor-not-allowed ${
          errors[id] ? "border-rose-500" : "border-neutral-300"
        } ${
          errors[id]
            ? "focus:border-rose-500 focus:outline-rose-500"
            : "focus:border-black"
        }`}
      />
    </div>
  );
};

export default Input;

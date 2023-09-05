"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextareaProps {
  id: string;
  value: string;
  maxChar: number;
  charNumber: number;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isDisabled?: boolean;
  required?: boolean;
  placeholder?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  value,
  charNumber,
  maxChar,
  register,
  errors,
  isDisabled,
  required,
  placeholder,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 items-start">
      <textarea
        id={id}
        {...register(id, { required })}
        placeholder={placeholder || " "}
        disabled={isDisabled}
        value={value}
        maxLength={maxChar}
        className={`peer w-full ${
          id === "title" ? "min-h-[25vh] text-2xl" : "min-h-[40vh] text-lg"
        } p-5 placeholder:text-sm placeholder:text-gray-500 placeholder:font-normal bg-white border-[1px] border-gray-300 rounded-lg outline-none focus:outline focus:outline-black focus:outline-[1.4px] focus:outline-offset-0 focus:border-black transition disabled:opacity-70 disabled:cursor-not-allowed ${
          errors[id] ? "border-rose-500" : "border-neutral-300"
        } ${
          errors[id]
            ? "focus:border-rose-500 focus:outline-rose-500"
            : "focus:border-black"
        }`}
      />
      <div className="flex flex-row items-start text-sm font-semibold">
        {charNumber}/{maxChar}
      </div>
    </div>
  );
};

export default Textarea;

"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label?: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isDisabled?: boolean;
  required?: boolean;
  placeholder?: string;
  animateLabel?: boolean;
  modalType?: boolean;
  priceFormat?: boolean;
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
  animateLabel,
  modalType,
  priceFormat,
}) => {
  return (
    <div
      className={`relative w-full ${animateLabel ? "" : "flex flex-col gap-1"}`}
    >
      {label && !animateLabel && <label className="font-bold">{label}</label>}
      <input
        id={id}
        {...register(id, { required })}
        placeholder={placeholder || " "}
        type={type}
        disabled={isDisabled}
        className={`peer w-full transition px-2 ${
          modalType ? "py-2 pt-6" : "py-[6.5px]"
        } ${
          priceFormat ? "pl-9" : ""
        } placeholder:text-sm placeholder:text-gray-500 placeholder:font-normal bg-white border-[1px] border-gray-300 rounded outline-none focus:outline focus:outline-black focus:outline-[1.4px] focus:outline-offset-0 focus:border-black transition disabled:opacity-70 disabled:cursor-not-allowed ${
          errors[id] ? "border-rose-500" : "border-neutral-300"
        } ${
          errors[id]
            ? "focus:border-rose-500 focus:outline-rose-500"
            : "focus:border-black"
        }`}
      />
      {label && animateLabel && (
        <label
          className={`absolute left-2 top-4 text-lg text-gray-500 z-10 transform -translate-y-3 scale-75 origin-[0]  duration-150 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${
            errors[id] ? "text-rose-500" : "text-neutral-300"
          }`}
        >
          {label}
        </label>
      )}
      {priceFormat && (
        <BiDollar
          size={23}
          className={`peer-placeholder-shown:hidden peer-focus:block absolute ${
            animateLabel ? "top-6" : "top-9"
          } left-2 text-gray-400`}
        />
      )}
    </div>
  );
};

export default Input;

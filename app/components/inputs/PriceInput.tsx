"use client";

import { useCallback, useEffect, useRef, useState } from "react";
// import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import { FaDollarSign, FaPencilAlt } from "react-icons/fa";

interface PriceInputProps {
  id: string;
  onChange: (value: number) => void;
  isDisabled?: boolean;
  required?: boolean;
}

const PriceInput: React.FC<PriceInputProps> = ({
  id,
  onChange,
  isDisabled,
  required,
}) => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [formattedString, setFormattedString] = useState<string>("0");
  const [inputLength, setInputLength] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // console.log("Value Length: ", inputLength);
    formattedString && setInputLength(formattedString.length);
  }, [formattedString, inputLength]);

  const handleChange = useCallback(
    (value: string) => {
      // console.log("OnChangeValue: ", value);
      if (value.length === 13) {
        return;
      }
      setInputValue(Number(value));

      let valueString = Intl.NumberFormat().format(Number(value));

      setFormattedString(valueString);

      // console.log("InputValue: ", value);
      onChange(Number(value));
    },
    [onChange]
  );

  const toggleEditable = useCallback(() => {
    if (inputRef.current === null) {
      return;
    }

    inputRef.current.focus();
  }, []);

  return (
    <div className="w-fit group p-0 flex flex-row items-center justify-center overflow-hidden">
      <div className="h-fit w-fit">
        <FaDollarSign
          className={`${
            inputLength >= 8
              ? inputLength >= 11
                ? "w-[50px] text-7xl"
                : "w-[50px] text-8xl"
              : "w-[70px] text-9xl"
          }`}
        />
      </div>
      <div
        className={`relative peer w-full h-fit pr-1 ${
          inputLength >= 8
            ? inputLength >= 11
              ? "text-7xl"
              : "text-8xl"
            : "text-9xl"
        } font-extrabold overflow-x-auto overflow-y-hidden`}
      >
        {formattedString}
        <input
          id={id}
          type="number"
          value={inputValue}
          ref={inputRef}
          onChange={(e) => handleChange(e.target.value)}
          disabled={isDisabled}
          height={120}
          maxLength={13}
          inputMode="numeric"
          autoComplete="off"
          autoFocus
          className={`absolute inset-0 top-0 bottom-0 right-0 left-0 p-0 outline-none ${
            inputLength >= 8
              ? inputLength >= 11
                ? "text-7xl pl-16 pr-0"
                : "text-8xl"
              : "text-9xl"
          } font-extrabold text-transparent bg-transparent caret-black`}
        />
      </div>
      <div className="h-[120px] flex flex-col justify-end">
        <div
          onClick={toggleEditable}
          className="p-2 rounded-full border cursor-pointer peer-focus-within:hidden group-focus-within:hidden"
        >
          <FaPencilAlt size={15} />
        </div>
      </div>
    </div>
  );
};

export default PriceInput;

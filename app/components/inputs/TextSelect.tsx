"use client";

import { useEffect, useState } from "react";
import Select from "react-select";

export type optionValue = {
  value: string;
  label: string;
};

const defaultOptions = [
  { value: "sale", label: "Sale" },
  { value: "buy", label: "Buy" },
  { value: "lease", label: "Lease" },
];

interface TextSelectProps {
  id: string;
  type: string;
  value?: optionValue;
  title?: string;
  placeholder?: string;
  onChange: (value: optionValue) => void;
  isDisabled?: boolean;
}

const TextSelect: React.FC<TextSelectProps> = ({
  id,
  value,
  title,
  type,
  isDisabled,
  onChange,
  placeholder,
}) => {
  const [options, setOptions] = useState(defaultOptions);

  useEffect(() => {
    if (type === "prefix") {
      setOptions([
        { value: "mr", label: "Mr" },
        { value: "mrs", label: "Mrs" },
        { value: "miss", label: "Miss" },
        { value: "sir", label: "Sir" },
      ]);
    }

    if (type === "role") {
      setOptions([
        { value: "owner", label: "Owner" },
        { value: "buyer", label: "Buyer" },
        { value: "agent", label: "Agent" },
      ]);
    }
  }, [type]);

  return (
    <div className="w-full flex flex-col items-start gap-1">
      {title && <div className="text-base font-bold">{title}</div>}
      <div className="w-full">
        <Select
          id={id}
          placeholder={placeholder || "--choose an option--"}
          defaultValue={null}
          value={value}
          onChange={(value) => onChange(value as optionValue)}
          options={options}
          isDisabled={isDisabled}
          classNames={{
            placeholder: () => "text-sm",
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#F5F5F5",
              primary: "black",
            },
          })}
        />
      </div>
    </div>
  );
};

export default TextSelect;

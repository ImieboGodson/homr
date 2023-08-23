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

interface CountrySelectProps {
  id: string;
  value?: optionValue;
  placeholder?: string;
  onChange: (value: optionValue) => void;
  isDisabled?: boolean;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  id,
  value,
  isDisabled,
  onChange,
  placeholder,
}) => {
  const [options, setOptions] = useState(defaultOptions);

  return (
    <div className="w-full flex flex-col items-start gap-1">
      <div className="w-full">
        <Select
          id={id}
          placeholder={placeholder || "--choose an option--"}
          defaultValue={null}
          value={value}
          onChange={(value) => onChange(value as optionValue)}
          isClearable
          options={options}
          isDisabled={isDisabled}
          formatOptionLabel={(option: any) => (
            <div
              className="
            flex flex-row items-center gap-3 z-40"
            >
              <div>{option.flag}</div>
              <div>
                {option.label},
                <span className="text-neutral-500 ml-1">{option.region}</span>
              </div>
            </div>
          )}
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

export default CountrySelect;

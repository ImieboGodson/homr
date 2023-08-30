"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import useWorldStates from "@/app/hooks/useWorldStates";

export type locationSelectValue = {
  value: string;
  label: string;
  latlng: number[];
  code: string;
  countryName: string;
  countryFlag: string | undefined;
  region: string;
};

const defaultOptions = [
  { value: "sale", label: "Sale" },
  { value: "buy", label: "Buy" },
  { value: "lease", label: "Lease" },
];

interface CountrySelectProps {
  id: string;
  value?: locationSelectValue;
  placeholder?: string;
  onChange: (value: locationSelectValue) => void;
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

  const { getAllStates, getByStateName, getByStateName_unformatted } =
    useWorldStates();

  console.log("State: ", getByStateName_unformatted("Lagos"));

  return (
    <div className="w-full flex flex-col items-start gap-1">
      <div className="w-full">
        <Select
          id={id}
          placeholder={placeholder || "--choose an option--"}
          defaultValue={null}
          value={value}
          onChange={(value) => onChange(value as locationSelectValue)}
          isClearable
          options={getAllStates()}
          isDisabled={isDisabled}
          formatOptionLabel={(option: any) => (
            <div
              className="
            flex flex-row items-center gap-3 z-40"
            >
              <div>{option.code}</div>
              <div>
                {option.label},
                <span className="text-neutral-500 ml-1">
                  {option.countryName}
                </span>
              </div>
            </div>
          )}
          classNames={{
            control: () => "p-1.5 border-2 bg-white",
            input: () => "text-lg",
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

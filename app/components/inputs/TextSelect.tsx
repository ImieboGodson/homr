"use client";

import { useState } from "react";
import Select from "react-select";

export type optionValue = {
  value: string;
  label: string;
};

interface TextSelectProps {
  id?: string;
  value: optionValue;
  options: optionValue[];
  title?: string;
  placeholder?: string;
  onChange: (value: optionValue) => void;
  disabled?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  loading?: boolean;
}

const TextSelect: React.FC<TextSelectProps> = ({
  id,
  value,
  options,
  title,
  disabled,
  searchable,
  clearable,
  loading,
  onChange,
  placeholder,
}) => {
  const [isClearable, setIsClearable] = useState(clearable);
  const [isSearchable, setIsSearchable] = useState(searchable);
  const [isDisabled, setIsDisabled] = useState(disabled);
  const [isLoading, setIsLoading] = useState(loading);
  return (
    <div className="w-full flex flex-col items-start gap-1">
      {title && <div className="text-base font-bold">{title}</div>}
      <div className="w-full">
        <Select
          id={id}
          placeholder={placeholder || "--choose an option--"}
          defaultValue={options[0]}
          value={value}
          onChange={(value) => onChange(value as optionValue)}
          options={options}
          isDisabled={isDisabled}
          isClearable={isClearable}
          isLoading={isLoading}
          isSearchable={isSearchable}
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

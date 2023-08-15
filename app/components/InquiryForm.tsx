"use client";

import { useState } from "react";
import TextSelect, { optionValue } from "./inputs/TextSelect";
import Input from "./inputs/Input";
import Button from "./Button";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

const InquiryForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorId, setErrorId] = useState("");

  const {
    register,
    watch,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      inquiryType: null,
      prefix: null,
      name: "",
      role: null,
      email: "",
      maxPrice: 1000,
      minSize: 20,
    },
  });

  const inquiryType = watch("inquiryType");
  const prefix = watch("prefix");
  const maxPrice = watch("maxPrice");
  const minSize = watch("minSize");
  const role = watch("role");

  const customSetValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    console.log(data);
    reset();
    setIsLoading(false);
  };

  return (
    <div className="w-full flex flex-col gap-4 items-between">
      <TextSelect
        id="inquiryType"
        type="inquiry"
        title="Inquiry type"
        value={inquiryType}
        onChange={(value) =>
          customSetValue("inquiryType", value as optionValue)
        }
        isDisabled={isLoading}
      />
      <div className="flex flex-row gap-6 items-center justify-end">
        <div className="w-[35%]">
          <TextSelect
            id="prefix"
            type="prefix"
            title="Title"
            placeholder="select"
            value={prefix}
            onChange={(value) => customSetValue("prefix", value as optionValue)}
            isDisabled={isLoading}
          />
        </div>
        <Input
          id="name"
          type="name"
          register={register}
          errors={errors}
          label="Your name"
          placeholder="full name"
          isDisabled={isLoading}
        />
      </div>
      <Input
        id="email"
        register={register}
        errors={errors}
        label="Email"
        type="email"
        placeholder="example@mail.com"
        isDisabled={isLoading}
        required
      />
      <TextSelect
        id="role"
        type="role"
        title="Personnel role"
        value={role}
        onChange={(value) => customSetValue("role", value as optionValue)}
        isDisabled={isLoading}
      />
      <div className="flex flex-row gap-6 items-center justify-end">
        <Input
          id="maxPrice"
          register={register}
          errors={errors}
          label="Max Price($)"
          type="number"
          placeholder="90"
          isDisabled={isLoading}
          required
          priceFormat
        />
        <Input
          id="minSize"
          register={register}
          errors={errors}
          label="Min Size (Sq ft)"
          type="number"
          placeholder="20"
          isDisabled={isLoading}
          required
        />
      </div>
      <div className="w-full">
        <Button title="Submits" onClick={handleSubmit(onSubmit)} primary />
      </div>
    </div>
  );
};

export default InquiryForm;

"use client";

import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import ListingHeading from "../listing/ListingHeading";
import SelectOption from "../inputs/SelectOption";
import {
  listingCategories,
  listingFeatures,
  listingTypes,
} from "@/app/libs/options";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import PriceInput from "../inputs/PriceInput";
import Counter from "../inputs/Counter";
import Input from "../inputs/Input";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import Checkbox from "../inputs/Checkbox";

const SearchModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [subtext, setSubtext] = useState(
    "Search rooms, entire homes and more."
  );
  const searchModal = useSearchModal();
  const router = useRouter();
  const params = useSearchParams();

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      location: "",
      features: [],
      category: "",
      type: "",
      roomCount: 1,
      bathroomCount: 1,
      guestCount: 1,
      minPrice: 10,
      maxPrice: 150,
    },
  });

  const location = watch("location");
  const features = watch("features");
  const category = watch("category");
  const type = watch("type");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");
  const guestCount = watch("guestCount");
  const minPrice = watch("minPrice");
  const maxPrice = watch("maxPrice");

  useEffect(() => {
    const listingType = listingTypes.find((item) => type === item.label);

    if (!listingType) return;

    setSubtext(listingType.subtitle);
  }, [type]);

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const setFeaturesValues = (value: string) => {
    if (!features.includes(value)) {
      return setCustomValue("features", [...features, value]);
    }

    const newFeatures = features.filter(
      (feature: string) => !(feature === value)
    );

    return setCustomValue("features", newFeatures);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      minPrice,
      maxPrice,
      category,
      type,
      // features,
      roomCount,
      bathroomCount,
    };

    const url = qs.stringifyUrl(
      {
        url: "/listings",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);

    searchModal.onClose();

    console.log("DATA: ", data);
  };

  const body = (
    <div className="w-full flex flex-col gap-6 items-start">
      <div className="w-full py-3 flex flex-col gap-4 items-start">
        <ListingHeading title="Type of place" subtitle={subtext} medium />
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-[95%] grid grid-cols-3 gap-2">
            {listingTypes.map((option) => {
              return (
                <div key={option.label} className="col-span-1">
                  <SelectOption
                    label={option.label}
                    selected={type === option.label}
                    onClick={(type) => setCustomValue("type", type)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full py-6 flex flex-col gap-4 items-start border-t">
        <ListingHeading title="Price range" medium />
        <div className="w-full py-5 flex flex-row justify-center items-center">
          <div className="w-[95%] flex flex-row gap-4 items-center justify-between">
            <Input
              id="minPrice"
              label="Minimum"
              register={register}
              errors={errors}
              type="number"
              isDisabled={isLoading}
              required
              priceFormat
              animateLabel
              modalType
            />
            -
            <Input
              id="maxPrice"
              label="Maximum"
              register={register}
              errors={errors}
              type="number"
              isDisabled={isLoading}
              required
              priceFormat
              animateLabel
              modalType
            />
          </div>
        </div>
      </div>
      <div className="w-full py-6 flex flex-col gap-4 items-start border-t">
        <ListingHeading title="Rooms" medium />
        <div className="w-full px-5 flex flex-row justify-start items-center">
          <div className="w-[70%] flex flex-col gap-4 items-start">
            <Counter
              title="Bedrooms"
              value={roomCount}
              onChange={(roomCount) => setCustomValue("roomCount", roomCount)}
            />
            <Counter
              title="Bathrooms"
              value={bathroomCount}
              onChange={(bathroomCount) =>
                setCustomValue("bathroomCount", bathroomCount)
              }
            />
          </div>
        </div>
      </div>
      <div className="w-full py-6 flex flex-col gap-4 items-start border-t">
        <ListingHeading title="Listing type" medium />
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-[95%] grid grid-cols-3 gap-2">
            {listingCategories.map((option) => {
              return (
                <div key={option.label} className="col-span-1">
                  <SelectOption
                    label={option.label}
                    icon={option.icon}
                    selected={category === option.label}
                    onClick={(category) => setCustomValue("category", category)}
                    categorySelect
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full py-6 flex flex-col gap-4 items-start border-t">
        <ListingHeading title="Amenities" medium />
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-full flex flex-col gap-12 items-start">
            <div className="w-full flex flex-col gap-5 items-start">
              <div className="text-lg font-semibold">Essentials</div>
              <div className="w-full grid grid-cols-2 gap-8">
                {listingFeatures[0].map((option: any) => {
                  return (
                    <div key={option.label} className="col-span-1">
                      <Checkbox
                        label={option.label}
                        onClick={(value) => setFeaturesValues(value)}
                        selected={features.includes(option.label)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 items-start">
              <div className="text-lg font-semibold">Features</div>
              <div className="w-full grid grid-cols-2 gap-8">
                {listingFeatures[1].map((option: any) => {
                  return (
                    <div key={option.label} className="col-span-1">
                      <Checkbox
                        label={option.label}
                        onClick={(value) => setFeaturesValues(value)}
                        selected={features.includes(option.label)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 items-start">
              <div className="text-lg font-semibold">Safety</div>
              <div className="w-full grid grid-cols-2 gap-8">
                {listingFeatures[2].map((option: any) => {
                  return (
                    <div key={option.label} className="col-span-1">
                      <Checkbox
                        label={option.label}
                        onClick={(value) => setFeaturesValues(value)}
                        selected={features.includes(option.label)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      title="Filters"
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      body={body}
      actionLable="Search"
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLable="Clear all"
      secondaryAction={() => reset()}
      largeWidth
    />
  );
};

export default SearchModal;

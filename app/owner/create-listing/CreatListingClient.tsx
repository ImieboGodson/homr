"use client";

import { SafeUser } from "@/app/types";
import axios from "axios";
import qs from "query-string";
import { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { toast } from "react-hot-toast";
import NavigationFooter from "@/app/components/footer/NavigationFooter";
import Container from "@/app/components/Container";
import UserTypeSelect from "@/app/components/inputs/UserTypeSelect";
import { FaPersonWalking, FaPersonShelter } from "react-icons/fa6";
import SelectOption from "@/app/components/inputs/SelectOption";
import Counter from "@/app/components/inputs/Counter";
import ListingHeading from "@/app/components/listing/ListingHeading";
import {
  listingTypes,
  listingCategories,
  listingFeatures,
} from "@/app/libs/options";
import Input from "@/app/components/inputs/Input";
import Map from "@/app/components/map/Map";
import CountrySelect from "@/app/components/inputs/CountrySelect";
import Textarea from "@/app/components/inputs/Textarea";
import PriceInput from "@/app/components/inputs/PriceInput";

enum STEPS {
  "USER" = 0,
  "CATEGORY" = 1,
  "TYPE" = 2,
  "LOCATION" = 3,
  "DETAILS" = 4,
  "FEATURES" = 5,
  "PHOTOS" = 6,
  "TITLE" = 7,
  "DESCRIPTION" = 8,
  "PRICE" = 9,
}

interface CreatListingClientProps {
  currentUser?: SafeUser | null;
}

const CreatListingClient: React.FC<CreatListingClientProps> = ({
  currentUser,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const [step, setStep] = useState(STEPS.USER);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      userType: "",
      title: "",
      description: "",
      location: "",
      features: [],
      images: [],
      category: "",
      type: "",
      roomCount: 1,
      bathroomCount: 1,
      guestCount: 1,
      price: 0,
    },
  });

  const userType = watch("userType");
  const title = watch("title");
  const description = watch("description");
  const location = watch("location");
  const features = watch("features");
  const images = watch("images");
  const category = watch("category");
  const type = watch("type");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");
  const guestCount = watch("guestCount");
  const price = watch("price");

  console.log(features);

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

  const onBack = () => {
    if (step === STEPS.USER) {
      return;
    }

    return setStep((value) => value - 1);
  };

  const onNext = () => {
    if (step === STEPS.PRICE) {
      return;
    }

    return setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step !== STEPS.PRICE) {
      return "Next";
    }

    return "Submit";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.USER) {
      return undefined;
    }

    return "Back";
  }, [step]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }

    setIsLoading(true);

    axios
      .post("/api/listings", data)
      .then(() => {
        toast.success("Listing created");
        reset();
        setStep(STEPS.USER);
        router.push("/owner");
      })
      .catch((error: any) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  let bodyContent = (
    <div className="w-full flex flex-col gap-10 items-start">
      <ListingHeading
        title={`Hello, ${currentUser?.name}`}
        subtitle="Who are you listing this property as?"
      />
      <div className="w-full py-2 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <UserTypeSelect
            icon={FaPersonShelter}
            label="Landlord"
            subtitle="I own this property"
            onClick={(value) => setCustomValue("userType", value)}
            selected={userType === "Landlord"}
          />
        </div>
        <div className="col-span-1">
          <UserTypeSelect
            icon={FaPersonWalking}
            label="Agent"
            subtitle="I am listing for the owner"
            onClick={(value) => setCustomValue("userType", value)}
            selected={userType === "Agent"}
          />
        </div>
      </div>
    </div>
  );

  if (step === STEPS.CATEGORY) {
    bodyContent = (
      <div className="w-full flex flex-col gap-10 items-start">
        <ListingHeading title="What are you listing this property for?" />
        <div className="mx-auto w-full md:w-[35vw]  py-2 grid grid-cols-1 gap-4">
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
    );
  }

  if (step === STEPS.TYPE) {
    bodyContent = (
      <div className="w-full flex flex-col gap-6 items-start">
        <ListingHeading title="What type of space is available?" />
        <div className="mx-auto w-full  py-2 grid grid-cols-1 gap-4">
          {listingTypes.map((option) => {
            return (
              <div key={option.label} className="col-span-1">
                <SelectOption
                  label={option.label}
                  subtitle={option.subtitle}
                  icon={option.icon}
                  selected={type === option.label}
                  onClick={(type) => setCustomValue("type", type)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="w-full mx-auto md:w-[40vw] flex flex-col gap-6 items-start">
        <ListingHeading
          title="Where is your property located?"
          subtitle="The location of your property is vital for guest's
          consideration."
        />
        <div className="w-full flex flex-col gap-8 ">
          <CountrySelect id="location" onChange={() => {}} />
          <div className="w-full h-[40vh] overflow-hidden rounded-lg z-0">
            <Map />
          </div>
        </div>
      </div>
    );
  }

  if (step === STEPS.DETAILS) {
    bodyContent = (
      <div className="w-full flex flex-col gap-6 items-start">
        <ListingHeading
          title="Share a few basics about your place"
          subtitle="Give numbers to the main features of the property."
        />
        <div className="w-full flex flex-col gap-2">
          <Counter
            title="Guests"
            subtitle="Number of guests allowed."
            value={guestCount}
            onChange={(guestCount) => setCustomValue("guestCount", guestCount)}
          />
          <hr />
          <Counter
            title="Bedrooms"
            subtitle="Number of rooms available."
            value={roomCount}
            onChange={(roomCount) => setCustomValue("roomCount", roomCount)}
          />
          <hr />
          <Counter
            title="Bathrooms"
            subtitle="Number of bathrooms available."
            value={bathroomCount}
            onChange={(bathroomCount) =>
              setCustomValue("bathroomCount", bathroomCount)
            }
          />
        </div>
      </div>
    );
  }

  if (step === STEPS.FEATURES) {
    bodyContent = (
      <div className="w-full flex flex-col gap-6 items-start">
        <ListingHeading
          title="Tell clients what your property has to offer"
          subtitle="Help clients understand what your property offers."
        />
        <div className="w-full flex flex-col gap-10 items-start">
          <div className="mx-auto w-full py-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {listingFeatures &&
              listingFeatures[0].map((option: any) => {
                return (
                  <div key={option.label} className="col-span-1 row-span-1">
                    <SelectOption
                      icon={option.icon}
                      label={option.label}
                      onClick={(value) => setFeaturesValues(value)}
                      selected={features.includes(option.label)}
                      categorySelect
                      small
                    />
                  </div>
                );
              })}
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="text-xl font-bold">
              Do you have any standout amenities?
            </div>
            <div className="mx-auto w-full py-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {listingFeatures &&
                listingFeatures[1].map((option: any) => {
                  return (
                    <div key={option.label} className="col-span-1 row-span-1">
                      <SelectOption
                        icon={option.icon}
                        label={option.label}
                        onClick={(value) => setFeaturesValues(value)}
                        selected={features.includes(option.label)}
                        categorySelect
                        small
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="text-xl font-bold">
              Do you have any of these safety items?
            </div>
            <div className="mx-auto w-full py-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {listingFeatures &&
                listingFeatures[2].map((option: any) => {
                  return (
                    <div key={option.label} className="col-span-1 row-span-1">
                      <SelectOption
                        icon={option.icon}
                        label={option.label}
                        onClick={(value) => setFeaturesValues(value)}
                        selected={features.includes(option.label)}
                        categorySelect
                        small
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === STEPS.PHOTOS) {
    bodyContent = (
      <div className="w-full flex flex-col gap-6 items-start">
        <div className="text-4xl font-extrabold">PHOTOS</div>
        <div>body</div>
      </div>
    );
  }

  if (step === STEPS.TITLE) {
    bodyContent = (
      <div className="w-full flex flex-col gap-6 items-start">
        <ListingHeading
          title="Now, give your property a title"
          subtitle="Keep it short and fun."
        />
        <div className="w-full flex flex-col gap-5">
          <Textarea
            id="title"
            value={title}
            maxChar={32}
            charNumber={title.length}
            register={register}
            errors={errors}
            isDisabled={isLoading}
            required
          />
        </div>
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="w-full flex flex-col gap-6 items-start">
        <ListingHeading
          title="And now, give a description"
          subtitle="Write about the features that you have."
        />
        <div className="w-full flex flex-col gap-4">
          <Textarea
            id="description"
            value={description}
            maxChar={500}
            charNumber={description.length}
            register={register}
            errors={errors}
            isDisabled={isLoading}
            required
          />
        </div>
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="w-full flex flex-col gap-12 items-start">
        <ListingHeading
          title="Now, give your price"
          subtitle="You can always change this later."
        />
        <div className="mt-8 w-full flex flex-col gap-4 items-center justify-center">
          <PriceInput
            id="price"
            value={price}
            register={register}
            errors={errors}
            defaultValue={price}
            isDisabled={isLoading}
            required
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Container>
        <div className="mx-auto w-full md:w-[40vw] lg:w-[50vw] pb-[100px]">
          {bodyContent}
        </div>
      </Container>
      <NavigationFooter
        onSubmit={handleSubmit(onSubmit)}
        actionLabel={actionLabel}
        secondaryAction={onBack}
        secondaryActionLabel={secondaryActionLabel}
      />
    </div>
  );
};

export default CreatListingClient;

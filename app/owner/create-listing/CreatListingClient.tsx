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
import {
  FaPersonWalking,
  FaPeopleRoof,
  FaPersonShelter,
} from "react-icons/fa6";
import { PiHouseLine, PiCertificate } from "react-icons/pi";
import { GiHouseKeys } from "react-icons/gi";
import { BsDoorClosed } from "react-icons/bs";
import { MdOutlineNightShelter } from "react-icons/md";
import SelectOption from "@/app/components/inputs/SelectOption";
import TextSelect from "@/app/components/inputs/TextSelect";
import Counter from "@/app/components/inputs/Counter";

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

// const stringsArray = [
//   "user",
//   "category",
//   "type",
//   "location",
//   "details",
//   "features",
//   "photos",
//   "title",
//   "description",
//   "price",
// ];

const types = [
  {
    icon: PiHouseLine,
    label: "An entire place",
    subtitle: "Guests have the whole to themselves.",
  },
  {
    icon: BsDoorClosed,
    label: "A room",
    subtitle:
      "Guests have their own room in a home, plus access to shared spaces.",
  },
  {
    icon: FaPeopleRoof,
    label: "A shared room",
    subtitle:
      "Guests sleep in a room or common area that may be shared with you or other.",
  },
];

const categories = [
  {
    icon: GiHouseKeys,
    label: "Rent",
  },
  {
    icon: MdOutlineNightShelter,
    label: "Shortlet",
  },
  {
    icon: PiCertificate,
    label: "Sale",
  },
];

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

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
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
      <div className="flex flex-col gap-2 items-start">
        <div className="text-4xl font-extrabold">
          Hello, {currentUser?.name}
        </div>
        <div className="text-xl text-neutral-600">
          Who are you listing this property as?
        </div>
      </div>
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
        <div className="flex flex-col gap-2 items-start">
          <div className="text-3xl font-bold">
            What are you listing this property for?
          </div>
        </div>
        <div className="mx-auto w-full md:w-[35vw]  py-2 grid grid-cols-1 gap-4">
          {categories.map((option) => {
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
        <div className="text-3xl font-bold">
          What type of space is available?
        </div>
        <div className="mx-auto w-full  py-2 grid grid-cols-1 gap-4">
          {types.map((option) => {
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
      <div className="w-full flex flex-col gap-6 items-start">
        <div className="flex flex-col gap-2 items-start">
          <div className="text-3xl font-bold">
            Where is your property located?
          </div>
          <div className="text-lg text-neutral-600">
            The location of your property is vital for guest&apos;s
            consideration.
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 ">
          {/* <TextSelect id="location" /> */}
        </div>
      </div>
    );
  }

  if (step === STEPS.DETAILS) {
    bodyContent = (
      <div className="w-full flex flex-col gap-6 items-start">
        <div className="flex flex-col gap-2 items-start">
          <div className="text-3xl font-bold">
            Share a few basics about your place
          </div>
          <div className="text-lg text-neutral-600">
            Give numbers to the main features of the property.
          </div>
        </div>
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
        <div className="text-4xl font-extrabold">FEATURES</div>
        <div>body</div>
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
        <div className="text-4xl font-extrabold">TITLE</div>
        <div>body</div>
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="w-full flex flex-col gap-6 items-start">
        <div className="text-4xl font-extrabold">DESCRIPTION</div>
        <div>body</div>
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="w-full flex flex-col gap-6 items-start">
        <div className="text-4xl font-extrabold">PRICE</div>
        <div>body</div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Container>
        <div className="mx-auto w-full md:w-[40vw] lg:w-[50vw]">
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

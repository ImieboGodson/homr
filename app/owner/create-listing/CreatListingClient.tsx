"use client";

import { SafeUser } from "@/app/types";
import axios from "axios";
import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { toast } from "react-hot-toast";
import NavigationFooter from "@/app/components/footer/NavigationFooter";
import Container from "@/app/components/Container";

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
  const [step, setStep] = useState(STEPS.USER);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
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

  const onBack = useCallback(() => {
    if (step === STEPS.CATEGORY) {
      return;
    }

    return setStep((value) => value - 1);
  }, [step]);

  const onNext = useCallback(() => {
    if (step === STEPS.DESCRIPTION) {
      return;
    }

    return setStep((value) => value + 1);
  }, [step]);

  const actionLabel = useMemo(() => {
    if (step !== STEPS.DESCRIPTION) {
      return "Next";
    }

    return "Submit";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return "Back";
  }, [step]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.DESCRIPTION) {
      return onNext();
    }

    setIsLoading(true);

    axios
      .post("/api/listings", data)
      .then(() => {
        toast.success("Listing created");
        reset();
        setStep(STEPS.LOCATION);
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
    <div className="w-full flex flex-col gap-6 items-start">
      <div className="text-4xl font-extrabold">
        What type of place do you have?
      </div>
      <div>body</div>
    </div>
  );

  return (
    <div className="relative w-full">
      <Container>
        <div className="mx-auto w-full md:w-[45vw] lg:w-[55vw] border">
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

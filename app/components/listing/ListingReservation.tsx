"use client";

import { useEffect, useMemo, useState } from "react";
import Counter from "../inputs/Counter";
import Button from "../buttons/Button";
import formatPrice from "@/app/hooks/usePriceFormat";
import formatDateString from "@/app/libs/formatDateString";
import { SafeUser } from "@/app/types";

interface ListingReservationProps {
  currentUser?: SafeUser | null;
  startDate?: Date;
  endDate?: Date;
  price: number;
  dayCount: number;
  costsOfNights: number;
  totalPrice: number;
  listingCategory: string;
  ownerType: string;
  guestCount: number;
  onGuestChange: (value: number) => void;
  onClick: (value: string) => void;
  disabled?: boolean;
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  currentUser,
  startDate,
  endDate,
  totalPrice,
  price,
  costsOfNights,
  dayCount,
  onClick,
  guestCount,
  onGuestChange,
  listingCategory,
  ownerType,
  disabled,
}) => {
  const attributes = useMemo(() => {
    if (listingCategory === "Rent") {
      return {
        actionLabel: `Contact ${ownerType}`,
        rate: "yearly",
      };
    } else if (listingCategory === "Shortlet") {
      return {
        actionLabel: "Reserve",
        rate: "night",
      };
    } else {
      return {
        actionLabel: `Contact ${ownerType}`,
        rate: "",
      };
    }
  }, [listingCategory, ownerType]);

  return (
    <div className="sticky top-32 w-full py-5 px-7 border border-neutral-200 rounded-lg shadow-lg">
      <div className="w-full flex flex-col items-start gap-6">
        <div className="w-full flex flex-row gap-1 justify-start items-center">
          <p className="text-xl font-bold">${formatPrice(price)}</p>
          <span className="text-base font-normal">{attributes.rate}</span>
        </div>
        <div className="w-full flex flex-col gap-2 items-start">
          {listingCategory === "Shortlet" && (
            <>
              <div className="w-full grid grid-cols-2 border border-neutral-500 rounded-lg">
                <div className="col-span-1 py-3 px-4 flex flex-col items-start border-r border-neutral-500">
                  <div className="text-[0.65rem] leading-3 font-extrabold">
                    CHECK-IN
                  </div>
                  <div className="text-sm font-normal text-neutral-700">
                    {startDate ? formatDateString(startDate) : "Add date"}
                  </div>
                </div>
                <div className="col-span-1 py-3 px-4 flex flex-col items-start ">
                  <div className="text-[0.65rem] leading-3 font-extrabold">
                    CHECKOUT
                  </div>
                  <div className="text-sm font-normal text-neutral-700">
                    {endDate ? formatDateString(endDate) : "Add date"}
                  </div>
                </div>
              </div>
              <div className="w-full py-0 px-4 border border-neutral-200 rounded-lg focus:border-4">
                <Counter
                  title="Guests"
                  value={guestCount}
                  onChange={(value) => onGuestChange(value)}
                />
              </div>
            </>
          )}
          <div className="mt-2 w-full flex flex-col gap-2 items-start">
            <div className="w-full flex flex-col gap-3">
              <Button
                title={attributes.actionLabel}
                onClick={() => onClick("contact")}
              />
              {(listingCategory === "Rent" || listingCategory === "Sale") && (
                <Button
                  title="Schedule a Tour"
                  onClick={() => onClick("viewing")}
                  outline
                />
              )}
            </div>
            {listingCategory === "Shortlet" && (
              <div className="w-full text-center text-sm font-light">
                You won&apos;t get charged yet
              </div>
            )}
          </div>
        </div>

        {listingCategory === "Shortlet" && (
          <div className="w-full flex flex-col gap-3 items-start">
            <div className="w-full flex flex-row justify-between items-center">
              <div className="text-base font-medium text-neutral-700 underline">
                ${formatPrice(price)} x {dayCount}{" "}
                {dayCount === 1 ? "night" : "nights"}
              </div>
              <div className="text-base font-medium text-neutral-700">
                ${formatPrice(costsOfNights)}
              </div>
            </div>
            <div className="w-full mb-4 flex flex-row justify-between items-center">
              <div className="text-base font-medium text-neutral-700 underline">
                V.A.T fee
              </div>
              <div className="text-base font-medium text-neutral-700">
                ${formatPrice(0.05 * costsOfNights)}
              </div>
            </div>
            <div className="w-full pt-4 flex flex-row justify-between items-center border-t">
              <div className="text-lg font-semibold ">Total before tax</div>
              <div className="text-lg font-semibold">
                ${formatPrice(totalPrice)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingReservation;

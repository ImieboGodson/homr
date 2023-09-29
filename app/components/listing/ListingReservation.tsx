"use client";

import { useEffect, useMemo, useState } from "react";
import Counter from "../inputs/Counter";
import Button from "../Button";
import formatPrice from "@/app/hooks/usePriceFormat";
import formatDateString from "@/app/libs/formatDateString";

interface ListingReservationProps {
  startDate?: Date;
  endDate?: Date;
  // guestCount?: number;
  price: number;
  dayCount: number;
  costsOfNights: number;
  totalPrice: number;
  vat: number;
  listingCategory: string;
  onClick: () => void;
  disabled?: boolean;
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  startDate,
  endDate,
  totalPrice,
  price,
  costsOfNights,
  dayCount,
  vat,
  onClick,
  listingCategory,
  disabled,
}) => {
  const [guestCount, setGuestCount] = useState(1);

  const category = useMemo(() => {
    if (listingCategory === "Rent") {
      return "Rental unit listed";
    } else if (listingCategory === "Shortlet") {
      return "Entire place hosted";
    } else {
      return "Property for sale listed";
    }
  }, [listingCategory]);

  return (
    <div className="sticky top-32 w-full py-5 px-7 border border-neutral-200 rounded-lg shadow-lg">
      <div className="w-full flex flex-col items-start gap-8">
        <div className="w-full flex flex-row gap-1 justify-start items-center">
          <p className="text-xl font-bold">${formatPrice(price)}</p>
          <span className="text-base font-normal">night</span>
        </div>
        <div className="w-full flex flex-col gap-2 items-start">
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
              onChange={(value) => setGuestCount(value)}
            />
          </div>
          <div className="mt-2 w-full flex flex-col gap-2 items-start">
            <div className="w-full">
              <Button title="Reserve" onClick={() => {}} authType />
            </div>
            <div className="w-full text-center text-sm font-light">
              You won&apos;t get charged yet
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default ListingReservation;

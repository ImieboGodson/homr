"use client";

import { SafeListing, SafeUser } from "@/app/types";
import Image from "next/image";
import { useMemo } from "react";
import { PiHouseLineBold, PiDesktopTower, PiHouseLine } from "react-icons/pi";
import { BsCalendar2Date } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";

interface ListingInfoProps {
  listing: SafeListing & {
    user: SafeUser;
  };
}

const ListingInfo: React.FC<ListingInfoProps> = ({ listing }) => {
  const category = useMemo(() => {
    if (listing.category === "Rent") {
      return "Rental unit listed";
    } else if (listing.category === "Shortlet") {
      return "Entire place hosted";
    } else {
      return "Property for sale listed";
    }
  }, [listing]);

  return (
    <div className="w-full flex flex-col gap-8">
      <div className=" flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1 items-start">
          <div className="text-2xl font-bold">
            {category} by {listing.user.name}
          </div>
          <div className="flex flex-row gap-2 text-sm font-light">
            10 guest - 5 bedroom - 3 bathroom
          </div>
        </div>
        <div className="relative w-fit h-fit rounded-full cursor-pointer overflow-hidden">
          {listing.user.image ? (
            <Image
              src={listing.user.image}
              height={35}
              width={35}
              alt="Cover photo"
              className="w-full object-cover"
            />
          ) : (
            <div className="w-[55px] h-[55px] flex flex-row items-center justify-center bg-neutral-900 text-white text-lg font-bold rounded-full">
              M
            </div>
          )}
        </div>
      </div>
      <div className="py-6 border-t border-b flex flex-col gap-6 items-start">
        <div className="flex flex-row gap-4 items-start justify-start">
          <PiHouseLine size={25} className="text-neutral-800" />
          <div className="flex flex-col items-start justify-start">
            <div className="text-lg font-semibold">Room in a rental unit</div>
            <div className="text-sm font-light text-neutral-500">
              Your own room in a home, plus access to shared spaces.
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start justify-start">
          <PiDesktopTower size={25} className="text-neutral-800" />
          <div className="flex flex-col items-start justify-start">
            <div className="text-lg font-semibold">Dedicated Workspace</div>
            <div className="text-sm font-light text-neutral-500">
              Your own room in a home, plus access to shared spaces.
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start justify-start">
          <TfiLocationPin size={25} className="text-neutral-800" />
          <div className="flex flex-col items-start justify-start">
            <div className="text-lg font-semibold">Great location</div>
            <div className="text-sm font-light text-neutral-500">
              100% of recent guests gave the location a 5-star rating.
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start justify-start">
          <BsCalendar2Date size={25} className="text-neutral-800" />
          <div className="flex flex-col items-start justify-start">
            <div className="text-lg font-semibold">
              Free Cancellation for 48 hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingInfo;

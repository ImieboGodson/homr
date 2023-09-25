"use client";

import { SafeListing, SafeUser } from "@/app/types";
import Image from "next/image";
import { useMemo } from "react";
import { PiHouseLineBold, PiDesktopTower, PiHouseLine } from "react-icons/pi";
import { BsCalendar2Date } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { listingTypes, listingFeatures } from "@/app/libs/options";
import { IconType } from "react-icons/lib";
import ListingItem from "./ListingItem";
import ListingFeature from "./ListingFeature";

type ListingType = {
  icon: IconType;
  label: string;
  subtitle: string;
  context: string;
};

type ListingFeature = {
  icon: IconType;
  label: string;
};

interface ListingInfoProps {
  listing: SafeListing & {
    user: SafeUser;
  };
  listingType?: ListingType | null;
}

const ListingInfo: React.FC<ListingInfoProps> = ({ listing, listingType }) => {
  console.log("this: ", listingType);

  const getPlaceholderLetter = useMemo(() => {
    const nameArray = listing.user.name.split("");

    return nameArray[0];
  }, [listing.user]);

  const category = useMemo(() => {
    if (listing.category === "Rent") {
      return "Rental unit listed";
    } else if (listing.category === "Shortlet") {
      return "Entire place hosted";
    } else {
      return "Property for sale listed";
    }
  }, [listing]);

  const features = useMemo(() => {
    // if (!listingFeatures) {
    //   return [];
    // }

    const flattenedArray = listingFeatures.flat(1);

    const featuresArray = listing.features.map((feat) => {
      let feature = flattenedArray.find((item) => item.label === feat);

      if (!feature) {
        return;
      }

      return feature;
    });

    if (!featuresArray) {
      return [];
    }

    return featuresArray;
  }, [listing.features]);

  console.log("FEATURES II: ", features);

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
              height={55}
              width={55}
              alt="Cover photo"
              className="w-full object-cover"
            />
          ) : (
            <div className="w-[55px] h-[55px] flex flex-row items-center justify-center bg-neutral-900 text-white text-lg font-bold rounded-full">
              {getPlaceholderLetter}
            </div>
          )}
        </div>
      </div>
      <div className="py-6 border-t border-b flex flex-col gap-6 items-start">
        {listingType && (
          <ListingItem
            icon={listingType.icon}
            label={listingType.label}
            subtitle={listingType.context}
          />
        )}
        {listing.category === "Shortlet" && (
          <ListingItem
            icon={TfiLocationPin}
            label="Great location"
            subtitle="100% of recent guests gave the location a 5-star rating."
          />
        )}
        {listing.category === "Shortlet" && (
          <ListingItem
            icon={BsCalendar2Date}
            label="Free Cancellation for 48 hours."
          />
        )}
      </div>
      {listing.description && (
        <div className="pb-12 flex flex-col gap-4 items-start border-b">
          <div className="text-2xl font-bold">About this place</div>
          <div className="text-base font-normal">{listing.description}</div>
        </div>
      )}
      {listing.features && listing.features.length !== 0 && (
        <div className="pb-12 flex flex-col gap-5 items-start border-b">
          <div className="text-2xl font-bold">What this place offers</div>
          {features && features[0] ? (
            <div className="w-full grid gap-5 grid-cols-1 lg:grid-cols-2">
              {features.map((item) => (
                <ListingFeature
                  key={item?.label}
                  icon={item?.icon}
                  label={item?.label}
                />
              ))}
            </div>
          ) : (
            <div>No feature is added by owner</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ListingInfo;

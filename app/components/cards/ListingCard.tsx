"use client";

import formatPrice from "@/app/hooks/usePriceFormat";
import { SafeListing, SafeUser } from "@/app/types";
import Image from "next/image";
import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { RxDimensions } from "react-icons/rx";
import HeartButton from "../HeartButton";

interface ListingCardProps {
  currentUser?: SafeUser | null;
  data: SafeListing;
  actionId?: string;
  actionLabel?: string;
  onAction?: (id: string) => void;
  isDisabled?: boolean;
}

const ListingCard: React.FC<ListingCardProps> = ({
  currentUser,
  data,
  actionId,
  onAction,
  actionLabel,
  isDisabled,
}) => {
  return (
    <div className="group w-full flex flex-col gap-4 cursor-pointer">
      <div className="relative w-full rounded-lg aspect-8/5 overflow-hidden">
        <div className="absolute top-2 right-3 z-20">
          <HeartButton listingId={data.id} currentUser={currentUser} />
        </div>
        <Image
          src={data.images[0]}
          alt="listing picture"
          fill
          className="object-cover group-hover:scale-125 transition"
        />
      </div>
      <div className="w-full flex flex-col gap-[2px] items-start">
        <div className="text-sm font-bold">
          ${formatPrice(data.price)} / month
        </div>
        <div className="text-base font-extrabold">{data.title}</div>
        <div className="text-sm font-light text-gray-400">{data.location}</div>
        <div className="mt-2 w-full flex flex-row gap-1.5 justify-start items-center">
          <div className="flex flex-row gap-1 items-center">
            <IoBedOutline size={13} />
            <div className="text-xs">{data.roomCount} Beds</div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <LiaBathSolid size={13} />
            <div className="text-xs">{data.bathroomCount} Baths</div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <RxDimensions size={13} />
            <div className="text-xs">200 sqft</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;

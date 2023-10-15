"use client";

import formatPrice from "@/app/hooks/usePriceFormat";
import { SafeListing, SafeUser } from "@/app/types";
import Image from "next/image";
import React, { useCallback, useMemo } from "react";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { RxDimensions } from "react-icons/rx";
import HeartButton from "../HeartButton";
import { useRouter } from "next/navigation";
import Button from "../buttons/Button";

interface ListingCardProps {
  currentUser?: SafeUser | null;
  data: SafeListing;
  viewingDate?: string;
  actionId?: string;
  actionLabel?: string;
  onAction?: (id: string) => void;
  isDisabled?: boolean;
}

const ListingCard: React.FC<ListingCardProps> = ({
  currentUser,
  data,
  viewingDate,
  actionId,
  actionLabel,
  onAction,
  isDisabled,
}) => {
  const router = useRouter();

  const date = useMemo(() => {
    if (!viewingDate) return;

    let date = new Date(viewingDate);

    let formatedDate = date.toLocaleDateString("en-US");

    let hour = date.toLocaleTimeString("en-US");

    return `${hour}, ${formatedDate}`;
  }, [viewingDate]);

  console.log(date);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!onAction || !actionId) return;

      onAction(actionId);
    },
    [actionId, onAction]
  );

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="group w-full flex flex-col gap-4 cursor-pointer overflow-hidden"
    >
      <div className="relative w-full rounded-lg aspect-8/5 overflow-hidden">
        {currentUser?.id !== data.userId && (
          <div className="absolute top-2 right-3 z-20">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        )}
        <Image
          src={data.images[0]}
          alt="listing picture"
          fill
          className="object-cover group-hover:scale-125 transition"
        />
      </div>
      <div className="w-full flex flex-col gap-[2px] items-start">
        <div className="text-sm font-bold">
          $
          {`${formatPrice(data.price)} ${
            data.category === "Rent"
              ? "/ month"
              : data.category === "Shortlet"
              ? "/ night"
              : ""
          }`}
        </div>
        <div className="text-base font-extrabold truncate">{data.title}</div>
        <div className="text-sm font-light text-gray-400 truncate">
          {data.location}
        </div>
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
        {viewingDate && data.category !== "Shortlet" && (
          <div className="w-full mt-3 py-2 flex flex-row items-center justify-center text-sm bg-slate-200 border-y">
            {date}
          </div>
        )}
        {actionLabel && actionId && onAction && (
          <div className="mt-4 w-full">
            <Button
              title={actionLabel}
              onClick={handleClick}
              isDisabled={isDisabled}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingCard;

"use client";

import Image from "next/image";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { RxDimensions } from "react-icons/rx";

interface ListingCardProps {
  currentUser?: {} | null;
  data: {};
  actionId?: string;
  actionLabel?: string;
  onAction?: (id: string) => void;
  isDisabled?: boolean;
}

const ListingCard = () => {
  return (
    <div className="group w-full flex flex-col gap-4 cursor-pointer">
      <div className="relative w-full rounded-lg aspect-8/5 overflow-hidden">
        <Image
          src="/images/post-1.jpg"
          alt="listing picture"
          fill
          className="object-cover group-hover:scale-125 transition"
        />
      </div>
      <div className="w-full flex flex-col gap-[2px] items-start">
        <div className="text-sm font-bold">$5,800</div>
        <div className="text-base font-extrabold">Luxury Family Home</div>
        <div className="text-sm font-light text-gray-400">
          137 Greene Borbane Ave
        </div>
        <div className="mt-2 w-full flex flex-row gap-1.5 justify-start items-center">
          <div className="flex flex-row gap-1 items-center">
            <IoBedOutline size={13} />
            <div className="text-xs">2 Beds</div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <LiaBathSolid size={13} />
            <div className="text-xs">2 Baths</div>
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

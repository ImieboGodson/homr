"use client";

import Image from "next/image";
import { useCallback } from "react";

interface CustomerCardProps {
  title?: string;
  body?: string;
  rating?: number;
  name: string;
  image?: string;
  position: string;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  title,
  body,
  image,
  rating,
  name,
  position,
}) => {
  const handleRating = useCallback(() => {
    switch (rating) {
      case 1:
        return "⭐";
      case 2:
        return "⭐⭐";
      case 3:
        return "⭐⭐⭐";
      case 4:
        return "⭐⭐⭐⭐";
      case 5:
        return "⭐⭐⭐⭐⭐";
      default:
        break;
    }
  }, [rating]);

  return (
    <div className="transition p-4 text-xs rounded-lg bg-white shadow">
      <div className="w-full flex flex-col gap-2 items-start">
        <div className="py-2 flex flex-col gap-1 items-start">
          <div className="text-sm underline font-extrabold">{title}</div>
          <div className="text-sm font-medium italic leading-5 mt-2">{`"${body}"`}</div>
          {rating && (
            <div className="mt-2 flex flex-row gap-1 items-center">
              {handleRating()}
            </div>
          )}
        </div>
        <div className="w-full py-3 flex gap-2 flex-row justify-start items-center border-t-[1px]">
          <Image
            src={image || "/images/user.png"}
            width={43}
            height={43}
            alt="customer pictures"
            className="overflow-hidden rounded-full"
          />
          <div className="flex flex-col gap-1 items-start">
            <div className="font-bold">{name}</div>
            <div className="font-light">{position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;

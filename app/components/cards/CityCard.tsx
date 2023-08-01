"use client";

import Image from "next/image";

interface CityCardProps {
  id: string;
  listings?: string[];
}

const CityCard = () => {
  return (
    <div className="group w-full grid grid-cols-3 gap-4 cursor-pointer">
      <div className="relative col-span-1 rounded-lg aspect-square overflow-hidden">
        <Image
          src="/images/post-2.jpg"
          alt="city picture"
          fill
          className="object-cover group-hover:scale-125 transition"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-1 items-start justify-center">
        <div className="text-sm font-extrabold">New York</div>
        <div className="text-xs">10 Properties</div>
      </div>
    </div>
  );
};

export default CityCard;

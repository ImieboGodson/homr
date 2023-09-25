"use client";

import { IconType } from "react-icons/lib";

interface ListingItemProps {
  icon: IconType;
  label: string;
  subtitle?: string;
}

const ListingItem: React.FC<ListingItemProps> = ({
  icon: Icon,
  label,
  subtitle,
}) => {
  return (
    <div className="flex flex-row gap-4 items-start justify-start">
      <Icon size={25} className="text-neutral-800" />
      <div className="flex flex-col items-start justify-start">
        <div className="text-lg font-semibold">{label}</div>
        {subtitle && (
          <div className="text-sm font-light text-neutral-500">{subtitle}</div>
        )}
      </div>
    </div>
  );
};

export default ListingItem;

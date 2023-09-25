"use client";

import { IconType } from "react-icons/lib";

interface ListingFeatureProps {
  icon: IconType;
  label: string | undefined;
}

const ListingFeature: React.FC<ListingFeatureProps> = ({
  icon: Icon,
  label,
}) => {
  return (
    <div className="flex flex-row gap-4 items-start justify-start">
      <Icon size={25} className="text-neutral-800" />
      <div className="flex flex-col items-start justify-start">
        <div className="text-lg font-medium">{label}</div>
      </div>
    </div>
  );
};

export default ListingFeature;

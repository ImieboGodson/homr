"use client";

import useFavorite from "@/app/hooks/useFavorite";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons/lib";

interface SaveButtonProps {
  currentUser?: SafeUser | null;
  listingId: string;
  icon: IconType;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  currentUser,
  listingId,
  icon: Icon,
}) => {
  const { isFavorited, toggleFavorite } = useFavorite({
    currentUser,
    listingId,
  });

  return (
    <div
      onClick={toggleFavorite}
      className={`w-full h-full flex flex-row gap-1 justify-center items-center  font-bold bg-white border-white text-black underline hover:bg-neutral-100 rounded-lg  cursor-pointer`}
    >
      <Icon
        size={18}
        className={`${isFavorited ? "fill-red-500" : "fill-black"}`}
      />
      <div className="text-sm font-bold text-black">
        {isFavorited ? "Saved" : "Save"}
      </div>
    </div>
  );
};

export default SaveButton;

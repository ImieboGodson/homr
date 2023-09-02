"use client";

import useFavorite from "../hooks/useFavorite";
import { SafeUser } from "../types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface HeartButtonProps {
  currentUser?: SafeUser | null;
  listingId: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  currentUser,
  listingId,
}) => {
  const { isFavorited, toggleFavorite } = useFavorite({
    currentUser,
    listingId,
  });
  return (
    <div
      onClick={toggleFavorite}
      className="relative transition cursor-pointer hover:opacity-70"
    >
      <AiOutlineHeart
        size={24}
        className="relative fill-white z-30 overflow-hidden"
      />
      <AiFillHeart
        size={21}
        className={`absolute top-[2px] left-[1.5px] ${
          isFavorited ? "fill-red-500" : "fill-neutral-500/70"
        } z-0`}
      />
    </div>
  );
};

export default HeartButton;

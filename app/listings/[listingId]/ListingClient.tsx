"use client";

import Button from "@/app/components/Button";
import ListingHeading from "@/app/components/listing/ListingHeading";
import useFavorite from "@/app/hooks/useFavorite";
import { SafeListing, SafeUser } from "@/app/types";
import Image from "next/image";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface ListingClientProps {
  currentUser?: SafeUser | null;
  listing: SafeListing & {
    user: SafeUser;
  };
}

const ListingClient: React.FC<ListingClientProps> = ({
  currentUser,
  listing,
}) => {
  const listingId = listing.id;

  const { isFavorited, toggleFavorite } = useFavorite({
    currentUser,
    listingId,
  });

  return (
    <div className="my-12 w-full md:w-[85vw] mx-auto flex flex-col gap-8">
      <ListingHeading
        title={listing.title}
        subtitle={listing.location}
        secondayAction
      >
        <div className="w-[6.5%]">
          <Button
            onClick={toggleFavorite}
            icon={isFavorited ? AiFillHeart : AiOutlineHeart}
            title="Save"
            noBorder
            favoriteButton
            isFavorited={isFavorited}
          />
        </div>
      </ListingHeading>
      <div className="w-full h-[55vh] flex flex-row gap-2 bg-neutral-200 rounded-xl overflow-hidden">
        <div className="relative w-[65%] hover:opacity-90 cursor-pointer bg-black transition">
          <Image
            src={listing.images[0]}
            fill
            alt="Cover photo"
            className="w-full object-cover"
          />
        </div>
        <div className="w-[35%] flex flex-col gap-2">
          <div className="relative h-[50%] hover:opacity-90 cursor-pointer bg-black transition">
            <Image
              src={listing.images[1]}
              fill
              alt="Cover photo"
              className="w-full object-cover"
            />
          </div>
          <div className="relative h-[50%] hover:opacity-90 cursor-pointer bg-black transition">
            <Image
              src={listing.images[2]}
              fill
              alt="Cover photo"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingClient;

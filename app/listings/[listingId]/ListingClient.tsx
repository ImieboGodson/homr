"use client";

import Button from "@/app/components/Button";
import ListingHeading from "@/app/components/listing/ListingHeading";
import SaveButton from "@/app/components/listing/SaveButton";
import LoginModal from "@/app/components/modals/LoginModal";
import Slider from "@/app/components/sliders/Slider";
import useFavorite from "@/app/hooks/useFavorite";
import useGalleryModal from "@/app/hooks/useGalleryModal";
import { SafeListing, SafeUser } from "@/app/types";
import Image from "next/image";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsGrid1X2 } from "react-icons/bs";

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
  const galleryModal = useGalleryModal();

  const { isFavorited } = useFavorite({
    currentUser,
    listingId,
  });

  return (
    <div className="mt-5 mb-12 md:my-12 w-full md:w-[85vw] mx-auto flex flex-col gap-8">
      <ListingHeading
        title={listing.title}
        subtitle={listing.location}
        secondayAction
      >
        {listing.userId !== currentUser?.id && (
          <div className="fixed top-6 right-6 z-50 md:static w-[8%]  h-8 md:h-10">
            <SaveButton
              currentUser={currentUser}
              listingId={listing.id}
              icon={isFavorited ? AiFillHeart : AiOutlineHeart}
            />
          </div>
        )}
      </ListingHeading>
      <div className="relative w-full h-[40vh] md:h-[55vh] grid grid-cols-3 grid-rows-2 gap-1.5 bg-neutral-200 rounded-xl overflow-hidden">
        <div
          onClick={() => galleryModal.onOpen()}
          className="absolute bottom-3 right-3 rounded-lg py-2 px-3.5 flex flex-row items-center gap-2 text-black text-sm font-bold bg-white shadow-sm border border-black cursor-pointer z-20"
        >
          <BsGrid1X2 size={15} />
          View all photos
        </div>
        <div className="relative col-span-3 md:col-span-2 row-span-2 opacity-90 hover:opacity-100 cursor-pointer bg-black transition">
          <Image
            src={listing.images[0]}
            fill
            alt="Cover photo"
            className="w-full object-cover"
          />
        </div>
        <div className="hidden md:block relative col-span-1 row-span-1 opacity-90 hover:opacity-100 cursor-pointer bg-black transition">
          <Image
            src={listing.images[1]}
            fill
            alt="Cover photo"
            className="w-full object-cover"
          />
        </div>
        <div className="hidden md:block relative col-span-1 row-span-1 opacity-90 hover:opacity-100 cursor-pointer bg-black transition">
          <Image
            src={listing.images[2]}
            fill
            alt="Cover photo"
            className="w-full object-cover"
          />
        </div>
      </div>
      <Slider
        isOpen={galleryModal.isOpen}
        photos={listing.images}
        listingId={listing.id}
        currentUser={currentUser}
      />
    </div>
  );
};

export default ListingClient;

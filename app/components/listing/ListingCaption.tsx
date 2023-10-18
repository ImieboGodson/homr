"use client";

import { BsGrid1X2 } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import ListingHeading from "./ListingHeading";
import SaveButton from "./SaveButton";
import Image from "next/image";
import { SafeUser } from "@/app/types";
import useGalleryModal from "@/app/hooks/useGalleryModal";
import useFavorite from "@/app/hooks/useFavorite";

interface ListingCaptionProps {
  currentUser?: SafeUser | null;
  listingId: string;
  location: string;
  title: string;
  images: string[];
  userId: string;
}

const ListingCaption: React.FC<ListingCaptionProps> = ({
  currentUser,
  listingId,
  title,
  location,
  images,
  userId,
}) => {
  const { isFavorited } = useFavorite({ currentUser, listingId });
  const galleryModal = useGalleryModal();

  return (
    <div className="w-full flex flex-col gap-8">
      <ListingHeading
        title={title}
        subtitle={location}
        secondayAction
        underline
      >
        {userId !== currentUser?.id && (
          <div className="fixed top-6 right-6 z-50 md:z-0 md:static w-[8%] h-8 md:h-10">
            <SaveButton
              currentUser={currentUser}
              listingId={listingId}
              icon={isFavorited ? AiFillHeart : AiOutlineHeart}
            />
          </div>
        )}
      </ListingHeading>
      <div className="relative w-full h-[40vh] md:h-[58vh] grid grid-cols-3 grid-rows-2 gap-1.5 bg-neutral-200 rounded-xl overflow-hidden">
        <div
          onClick={() => galleryModal.onOpen()}
          className="absolute bottom-3 right-3 rounded-lg py-2 px-3.5 flex flex-row items-center gap-2 text-black text-sm font-bold bg-white shadow-sm border-2 border-neutral-900/20 cursor-pointer z-20"
        >
          <BsGrid1X2 size={15} />
          View all photos
        </div>
        <div
          onClick={() => galleryModal.onOpen()}
          className="relative col-span-3 md:col-span-2 row-span-2 opacity-90 hover:opacity-100 cursor-pointer bg-black transition"
        >
          <Image
            src={images[0]}
            fill
            alt="Cover photo"
            className="w-full object-cover"
            priority
          />
        </div>
        <div
          onClick={() => galleryModal.onOpen()}
          className="hidden md:block relative col-span-1 row-span-1 opacity-90 hover:opacity-100 cursor-pointer bg-black transition"
        >
          <Image
            src={images[1]}
            fill
            alt="Cover photo"
            className="w-full object-cover"
            priority
          />
        </div>
        <div
          onClick={() => galleryModal.onOpen()}
          className="hidden md:block relative col-span-1 row-span-1 opacity-90 hover:opacity-100 cursor-pointer bg-black transition"
        >
          <Image
            src={images[2]}
            fill
            alt="Cover photo"
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ListingCaption;

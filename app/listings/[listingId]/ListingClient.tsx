"use client";

import Button from "@/app/components/Button";
import ListingCaption from "@/app/components/listing/ListingCaption";
import ListingHeading from "@/app/components/listing/ListingHeading";
import ListingInfo from "@/app/components/listing/ListingInfo";
import SaveButton from "@/app/components/listing/SaveButton";
// import Map from "@/app/components/map/Map";
import GalleryModal from "@/app/components/modals/GalleryModal";
import useFavorite from "@/app/hooks/useFavorite";
import useGalleryModal from "@/app/hooks/useGalleryModal";
import useWorldStates from "@/app/hooks/useWorldStates";
import { SafeListing, SafeUser } from "@/app/types";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useMemo } from "react";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsGrid1X2 } from "react-icons/bs";

const Map = dynamic(() => import("@/app/components/map/Map"), {
  ssr: false,
});
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
  const galleryModal = useGalleryModal();
  const { getByStateName } = useWorldStates();
  const cityName = listing.location.split(", ")[0];
  const position = getByStateName(cityName);

  console.log(position);

  return (
    <>
      <GalleryModal
        isOpen={galleryModal.isOpen}
        photos={listing.images}
        listingId={listing.id}
        currentUser={currentUser}
      />
      <div className="mt-5 mb-12 md:my-12 w-full md:w-[85vw] mx-auto flex flex-col gap-12">
        <ListingCaption
          currentUser={currentUser}
          listingId={listing.id}
          title={listing.title}
          images={listing.images}
          location={listing.location}
          userId={listing.userId}
        />
        <div className="w-full grid grid-cols-3">
          <div className="col-span-3 md:col-span-2 md:pr-4">
            <ListingInfo listing={listing} />
          </div>
          <div className="col-span-3 md:col-span-1 flex flex-col gap-4 bg-orange-400">
            B
          </div>
        </div>
        <div className="w-full h-[40vh] md:h-[75vh]">
          <Map />
        </div>
      </div>
    </>
  );
};

export default ListingClient;

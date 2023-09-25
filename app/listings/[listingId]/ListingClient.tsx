"use client";

import Button from "@/app/components/Button";
import ListingCaption from "@/app/components/listing/ListingCaption";
import ListingHeading from "@/app/components/listing/ListingHeading";
import ListingInfo from "@/app/components/listing/ListingInfo";
import SaveButton from "@/app/components/listing/SaveButton";
import Map from "@/app/components/map/Map";
import GalleryModal from "@/app/components/modals/GalleryModal";
import useFavorite from "@/app/hooks/useFavorite";
import useGalleryModal from "@/app/hooks/useGalleryModal";
import useWorldStates from "@/app/hooks/useWorldStates";
import { listingTypes } from "@/app/libs/options";
import { SafeListing, SafeUser } from "@/app/types";
import dynamic from "next/dynamic";
import { useMemo } from "react";

// const Map = dynamic(() => import("@/app/components/map/Map"), {
//   ssr: false,
// });
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

  const typeObject = useMemo(() => {
    const listingType = listingTypes.find(
      (item) => item.label === listing.type
    );

    if (!listingType) {
      return null;
    }

    return listingType;
  }, [listing.type]);

  return (
    <div className="w-full">
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
          <div className="col-span-3 md:col-span-2 md:pr-12">
            <ListingInfo listing={listing} listingType={typeObject} />
          </div>
          <div className="col-span-3 md:col-span-1 flex flex-col gap-4 bg-orange-400">
            B
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start">
          <div className="text-2xl font-bold">Where you&apos;ll be</div>
          <div className="text-base font-normal">{listing.location}</div>
          <div className="w-full h-[40vh] md:h-[75vh]">
            <Map center={position?.latlng} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingClient;

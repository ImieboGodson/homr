"use client";

import Button from "@/app/components/Button";
import Calendar from "@/app/components/inputs/Calendar";
import ListingCaption from "@/app/components/listing/ListingCaption";
import ListingHeading from "@/app/components/listing/ListingHeading";
import ListingInfo from "@/app/components/listing/ListingInfo";
import ListingReservation from "@/app/components/listing/ListingReservation";
import SaveButton from "@/app/components/listing/SaveButton";
import Map from "@/app/components/map/Map";
import GalleryModal from "@/app/components/modals/GalleryModal";
import useFavorite from "@/app/hooks/useFavorite";
import useGalleryModal from "@/app/hooks/useGalleryModal";
import useWorldStates from "@/app/hooks/useWorldStates";
import { listingTypes } from "@/app/libs/options";
import { SafeListing, SafeUser } from "@/app/types";
import { differenceInDays } from "date-fns";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Range } from "react-date-range";

// const Map = dynamic(() => import("@/app/components/map/Map"), {
//   ssr: false,
// });

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

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
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [costOfNights, setCostOfNights] = useState(listing.price);
  const [vatValue, setVatValue] = useState(0);
  const [dayCount, setDayCount] = useState(1);
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

  const onChange = (value: Range) => {
    setDateRange(value);
  };

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);
      const nightsCost = listing.price * dayCount;
      setDayCount(dayCount);

      if (dayCount && nightsCost && listing.price) {
        setTotalPrice(nightsCost + Math.ceil(0.05 * nightsCost));
        setCostOfNights(dayCount * listing.price);
        setVatValue(Math.ceil(0.05 * nightsCost));
      } else {
        setCostOfNights(1 * listing.price);
        setVatValue(Math.ceil(0.05 * listing.price));
        setTotalPrice(listing.price);
        setDayCount(1);
      }
    }
  }, [dateRange, listing.price]);

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
          <div className="col-span-3 flex flex-col gap-8 md:col-span-2 md:pr-12">
            <ListingInfo listing={listing} listingType={typeObject} />
            {listing.category === "Shortlet" && (
              <div className="pb-12 flex flex-col gap-5 items-start">
                <div className="text-2xl font-bold">
                  How long are you staying for?
                </div>
                <div className="w-full flex flex-row items-center">
                  <Calendar
                    value={dateRange}
                    onChange={(value) => onChange(value.selection)}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="relative col-span-3 md:col-span-1 flex flex-col">
            <ListingReservation
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
              onClick={() => {}}
              price={listing.price}
              dayCount={dayCount}
              totalPrice={totalPrice}
              costsOfNights={costOfNights}
              vat={vatValue}
              listingCategory={listing.category}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start border-t py-10">
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

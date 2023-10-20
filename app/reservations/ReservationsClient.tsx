"use client";

import { useCallback, useState } from "react";
import ListingCard from "../components/cards/ListingCard";
import { SafeReservation, SafeUser } from "../types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

interface ReservationsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onButtonClick = useCallback(
    (id: string) => {
      if (!id) return;

      setIsLoading(true);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation deleted");
          router.refresh();
        })
        .catch((e) => {
          toast.error("Something went wrong");
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [router]
  );

  return (
    <div className="w-full py-16 gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {reservations.map((reservation) => {
        return (
          <ListingCard
            key={reservation.id}
            currentUser={currentUser}
            data={reservation.listing}
            actionId={reservation.id}
            actionLabel="Cancel reservation"
            onAction={onButtonClick}
          />
        );
      })}
    </div>
  );
};

export default ReservationsClient;

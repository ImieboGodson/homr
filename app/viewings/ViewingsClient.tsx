"use client";

import { useCallback, useState } from "react";
import ListingCard from "../components/cards/ListingCard";
import { SafeUser, SafeViewing } from "../types";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

interface ViewingsClientProps {
  viewings: SafeViewing[];
  currentUser?: SafeUser | null;
}

const ViewingsClient: React.FC<ViewingsClientProps> = ({
  viewings,
  currentUser,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onButtonClick = useCallback(
    (id: string) => {
      if (!id) return;

      setIsLoading(true);

      axios
        .delete(`/api/viewings/${id}`)
        .then(() => {
          toast.success("Viewing removed");
          router.refresh();
        })
        .catch((e) => {
          toast.error("Something went wrong.");
        })
        .finally(() => {
          setIsLoading(true);
        });
    },
    [router]
  );

  return (
    <div className="w-full py-16 gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {viewings.map((viewing) => {
        return (
          <ListingCard
            key={viewing.id}
            currentUser={currentUser}
            data={viewing.listing}
            actionId={viewing.id}
            onAction={onButtonClick}
            actionLabel="Cancel viewing"
            viewingDate={viewing.date}
          />
        );
      })}
    </div>
  );
};

export default ViewingsClient;

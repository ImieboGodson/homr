"use client";

import ListingCard from "../components/cards/ListingCard";
import { SafeListing, SafeUser } from "../types";

interface WishlistsClientProps {
  favorites: SafeListing[];
  currentUser?: SafeUser | null;
}

const WishlistsClient: React.FC<WishlistsClientProps> = ({
  favorites,
  currentUser,
}) => {
  return (
    <div className="w-full py-16 gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {favorites.map((favorite) => {
        return (
          <ListingCard
            key={favorite.id}
            currentUser={currentUser}
            data={favorite}
          />
        );
      })}
    </div>
  );
};

export default WishlistsClient;

import getCurrentUser from "../actions/getCurrentUser";
import getAllListings, { ListingsParams } from "../actions/getAllListings";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import ListingCard from "../components/cards/ListingCard";

interface ListingsProps {
  searchParams: ListingsParams;
}

const Listings = async ({ searchParams }: ListingsProps) => {
  const listings = await getAllListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <Container>
          <EmptyState
            title="No listings yet"
            subtitle="Try adjusting the filters, or start on clean slate."
          />
        </Container>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="w-full py-16 gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {listings.map((listing) => {
            return (
              <ListingCard
                key={listing.id}
                currentUser={currentUser}
                data={listing}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Listings;

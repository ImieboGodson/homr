import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

interface IParams {
  listingId: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const currentUser = await getCurrentUser();
  const listing = await getListingById(params);
  const reservations = await getReservations(params);

  // console.log("Listing", listing);

  if (!listing) {
    return (
      <ClientOnly>
        <Container>
          <EmptyState
            title="Ooops, looks like something broke"
            subtitle="resource not found."
          />
        </Container>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <ListingClient
          listing={listing}
          currentUser={currentUser}
          reservations={reservations}
        />
      </Container>
    </ClientOnly>
  );
};

export default ListingPage;

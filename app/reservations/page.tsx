import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import Heading from "../components/Heading";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <Container>
          <EmptyState
            title="Unauthorized Access!"
            actionLabel="Go home"
            showButton
            center
          />
        </Container>
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ userId: currentUser.id });

  return (
    <ClientOnly>
      <Container>
        <div className="w-full py-6 flex flex-col items-start justify-center">
          <p className="text-4xl font-bold">Reservations</p>
        </div>
        <div className="my-2 min-h-[100vh] flex flex-col gap-4 items-start">
          {reservations.length === 0 ? (
            <EmptyState
              title="No reservation booked...yet!"
              subtitle="Looks like you haven't made any resevations yet."
              actionLabel="Start searching"
              showButton
              border
            />
          ) : (
            <ReservationsClient
              reservations={reservations}
              currentUser={currentUser}
            />
          )}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default ReservationsPage;

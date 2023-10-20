import getCurrentUser from "../actions/getCurrentUser";
import getViewings from "../actions/getViewings";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import ViewingsClient from "./ViewingsClient";

const ViewingsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <Container>
          <EmptyState title="Unauthorized Access!" showButton center />
        </Container>
      </ClientOnly>
    );
  }

  const viewings = await getViewings({ userId: currentUser.id });

  return (
    <ClientOnly>
      <Container>
        <div className="w-full py-6 flex flex-col items-start justify-center">
          <p className="text-4xl font-bold">Viewings</p>
        </div>
        <div className=" min-h-[100vh] flex flex-col gap-4 items-start">
          {viewings.length === 0 ? (
            <EmptyState
              title="No scheduled viewings...for now."
              subtitle="Looks like you haven't found the right place."
              actionLabel="Keep searching"
              showButton
              border
            />
          ) : (
            <ViewingsClient viewings={viewings} currentUser={currentUser} />
          )}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default ViewingsPage;

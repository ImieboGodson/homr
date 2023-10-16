import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import WishlistsClient from "./WishlistsClient";

const WishlistsPage = async () => {
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

  const favorites = await getFavorites();

  return (
    <ClientOnly>
      <Container>
        <div className="w-full py-6 flex flex-col items-start justify-center">
          <p className="text-4xl font-bold">Favorites</p>
        </div>
        <div className="w-full min-h-[100vh] flex flex-col gap-4 items-start">
          {favorites.length === 0 ? (
            <EmptyState
              title="Add your favorite places here"
              subtitle="As you search, click the heart icon to save your favorite places and Experiences."
            />
          ) : (
            <WishlistsClient favorites={favorites} currentUser={currentUser} />
          )}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default WishlistsPage;

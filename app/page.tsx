import HomeClient from "./HomeClient";
import getCurrentUser from "./actions/getCurrentUser";
import getLatestListings from "./actions/getLatestListings";
import getTopCities from "./actions/getTopCities";

const Home = async () => {
  const listings = await getLatestListings();
  const currentUser = await getCurrentUser();
  const topCities = await getTopCities();

  return (
    <HomeClient
      recentListings={listings}
      currentUser={currentUser}
      topCities={topCities}
    />
  );
};

export default Home;

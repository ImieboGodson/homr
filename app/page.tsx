import HomeClient from "./HomeClient";
import getCities from "./actions/getCities";
import getCurrentUser from "./actions/getCurrentUser";
import getLatestListings from "./actions/getLatestListings";

const Home = async () => {
  const listings = await getLatestListings();
  const currentUser = await getCurrentUser();
  const cities = await getCities();

  // console.log("Cities: ", cities);

  return (
    <HomeClient
      recentListings={listings}
      currentUser={currentUser}
      topCities={cities}
    />
  );
};

export default Home;

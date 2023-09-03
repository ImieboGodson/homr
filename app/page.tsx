import HomeClient from "./HomeClient";
import getCurrentUser from "./actions/getCurrentUser";
import getLatestListings from "./actions/getLatestListings";

const Home = async () => {
  const listings = await getLatestListings();
  const currentUser = await getCurrentUser();

  // console.log("Current User: ", currentUser);

  return <HomeClient recentListings={listings} currentUser={currentUser} />;
};

export default Home;

import getCities from "../actions/getCities";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import CitiesClient from "./CitiesClient";

const CitiesPage = async () => {
  const cities = await getCities();

  if (!cities || cities.length === 0) {
    return (
      <ClientOnly>
        <Container>
          <EmptyState
            title="No city yet"
            subtitle="Looks like there's no city available for now."
          />
        </Container>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="w-full py-6 flex flex-col items-start justify-center">
          <p className="text-4xl font-bold">Cities</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <CitiesClient cities={cities} />
        </div>
      </Container>
    </ClientOnly>
  );
};

export default CitiesPage;

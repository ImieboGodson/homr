"use client";

import CityCard from "../components/cards/CityCard";
import { SafeCity } from "../types";

interface CitiesClientProp {
  cities: SafeCity[];
}

const CitiesClient: React.FC<CitiesClientProp> = ({ cities }) => {
  return (
    <div className="w-full py-16 gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {cities.map((city) => {
        return (
          <CityCard
            key={city.id}
            city={city.name}
            country={city.country}
            image={city.image}
            listings={city.listings}
          />
        );
      })}
    </div>
  );
};

export default CitiesClient;

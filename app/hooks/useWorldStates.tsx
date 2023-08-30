import { Covered_By_Your_Grace } from "next/font/google";
import { City, State, Country } from "worldpedia";

const states = State.getAllStates();
const countries = Country.getAllCountries();

const getByCountryCode = (code: string) => {
  const country = countries.find((country) => code === country.iso2);

  return country;
};

const formattedStates = states.map((state) => ({
  name: state.name,
  label: state.name,
  code: state.countryCode,
  latlng: [state.latitude, state.longitude],
  countryName: getByCountryCode(state.countryCode)?.name,
  countryFlag: getByCountryCode(state.countryCode)?.flag,
  region: getByCountryCode(state.countryCode)?.subregion,
}));

const useWorldStates = () => {
  const getAllStates = () => formattedStates;

  const getByStateName_unformatted = (name: string) => {
    return states.find((state) => name === state.name);
  };

  const getByStateName = (name: string) => {
    return formattedStates.find((state) => name === state.name);
  };

  return {
    getAllStates,
    getByStateName_unformatted,
    getByStateName,
  };
};

export default useWorldStates;

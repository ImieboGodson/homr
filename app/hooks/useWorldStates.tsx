import { State, Country } from "worldpedia";

const states = State.getAllStates();
const countries = Country.getAllCountries();

const getByCountryCode = (code: string) => {
  const country = countries.find((country) => code === country.iso2);

  return country;
};

const formattedStates = states.map((state) => ({
  value: state.name,
  label: state.name,
  code: state.countryCode,
  latlng: [Number(state.latitude), Number(state.longitude)],
  country: getByCountryCode(state.countryCode)?.name,
  flag: getByCountryCode(state.countryCode)?.flag,
  region: getByCountryCode(state.countryCode)?.subregion,
}));

const useWorldStates = () => {
  const getAllStates = () => formattedStates;

  const getByStateName_unformatted = (name: string) => {
    return states.find((state) => name === state.name);
  };

  const getByStateName = (name: string) => {
    return formattedStates.find((state) => name === state.value);
  };

  return {
    getAllStates,
    getByStateName_unformatted,
    getByStateName,
  };
};

export default useWorldStates;

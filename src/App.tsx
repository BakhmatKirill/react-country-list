import React from 'react';
import countries from './country-data.json';
import { CountryList } from './components/CountryList/CountryList';
import { transformCountries } from './mappers/transformCountries';

export const App = () => {
  const transformedCountries = transformCountries(countries);
  return (
    <div className="container">
      <h1 className="m-3">Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};

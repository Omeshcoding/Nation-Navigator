import React, { useState, useEffect } from 'react';
import CountryCard from '../components/CountryCard';
import Searchbar from '../components/Searchbar';
import axios from 'axios';
const HomePage = () => {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);
  const onSearch = (e) => {
    e.preventDefault();
    console.log('working');
  };
  const handleSearch = (e) => {
    setValue(e.target.value);
  };
  const countryData = countries.filter((country) => {
    if (country.name.common.toUpperCase().includes(value.toUpperCase())) {
      return country.name.common;
    }
  });
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data));
  }, []);
  return (
    <div>
      <Searchbar
        onSearch={onSearch}
        value={value}
        handleSearch={handleSearch}
      />
      <div className="flex flex-wrap justify-center lg:justify-normal font-nunito-sans">
        {!value
          ? countries.map((country) => {
              const id = country.cca3;
              const image = country.flags.png;
              const countryName = country.name.common;
              const alt = country.flags.alt;
              const population = country.population;
              const region = country.region;
              const capital = country.capital;

              return (
                <CountryCard
                  key={id}
                  id={id}
                  countryName={countryName}
                  image={image}
                  alt={alt}
                  population={population}
                  region={region}
                  capital={capital}
                  {...country}
                />
              );
            })
          : countryData.map((country) => {
              const id = country.cca3;
              const image = country.flags.png;
              const countryName = country.name.common;
              const alt = country.flags.alt;
              const population = country.population;
              const region = country.region;
              const capital = country.capital;

              return (
                <CountryCard
                  key={id}
                  id={id}
                  countryName={countryName}
                  image={image}
                  alt={alt}
                  population={population}
                  region={region}
                  capital={capital}
                  {...country}
                />
              );
            })}
      </div>
    </div>
  );
};

export default HomePage;

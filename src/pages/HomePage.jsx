import React, { useState, useEffect } from 'react';
import CountryCard from '../components/CountryCard';
import Searchbar from '../components/Searchbar';
import axios from 'axios';
import Filter from '../components/Filter';
const HomePage = () => {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [filters, setFilters] = useState([
    'All',
    'Asia',
    'Africa',
    'Europe',
    'Oceania',
  ]);
  const [filterstore, setFilterStore] = useState([]);

  const onSearch = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    setFilterStore([]);
    setValue(e.target.value);
  };
  const countryData = countries.filter((country) => {
    if (country.name.common.toUpperCase().includes(value.toUpperCase())) {
      return country.name.common;
    }
  });

  const filterRegion = (str) => {
    const filterByContinent = countries.filter(
      (country) => country.region === str
    );
    if (filterByContinent) {
      setFilterStore(filterByContinent);
    } else {
      setCountries(countries);
    }
  };

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data));
  }, []);
  return (
    <div>
      <div className=" md:flex row justify-between items-center mx-14 my-16 ">
        <Searchbar
          onSearch={onSearch}
          value={value}
          handleSearch={handleSearch}
        />

        <Filter filters={filters} filterRegion={filterRegion} />
      </div>
      <div className="flex flex-wrap justify-center lg:justify-normal font-nunito-sans">
        {filterstore.length !== 0
          ? filterstore?.map((country) => {
              const id = country.cca3;
              return <CountryCard key={id} {...country} />;
            })
          : value
          ? countryData.map((country) => {
              const id = country.cca3;
              return <CountryCard key={id} {...country} />;
            })
          : countries.map((country) => {
              const id = country.cca3;
              return <CountryCard key={id} {...country} />;
            })}
      </div>
    </div>
  );
};

export default HomePage;

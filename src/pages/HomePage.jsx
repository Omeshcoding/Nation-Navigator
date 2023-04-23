import React from 'react';
import CountryCard from '../components/CountryCard';
import Searchbar from '../components/Searchbar';
const HomePage = () => {
  return (
    <div>
      <Searchbar />
      <CountryCard />
    </div>
  );
};

export default HomePage;

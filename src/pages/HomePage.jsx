import React, { useState, useEffect } from 'react';
import CountryCard from '../components/CountryCard';
import Searchbar from '../components/Searchbar';
import axios from 'axios';
const HomePage = () => {
  const [value, setValue] = useState('');
  const onSearch = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <Searchbar
        onSearch={onSearch}
        value={value}
        handleSearch={handleSearch}
      />
      <CountryCard />
    </div>
  );
};

export default HomePage;

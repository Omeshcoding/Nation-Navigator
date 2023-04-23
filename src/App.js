import React from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import CountryCard from './components/CountryCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import CountryDetails from './pages/CountryDetails';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<CountryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import ProductCard from './components/ProductCard';
const App = () => {
  return (
    <div className="">
      <header>
        <Navbar />
        <Searchbar />
      </header>
      <main>
        <ProductCard />
      </main>
    </div>
  );
};
export default App;

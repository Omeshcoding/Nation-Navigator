import React from 'react';
import { Link } from 'react-router-dom';
const CountryCard = (country) => {
  const image = country.flags.png;
  const countryName = country.name.common;
  const alt = country.flags.alt;
  const population = country.population;
  const region = country.region;
  const capital = country.capital;
  const id = country.cca3;
  const continents = country.region;
  // console.log(image, countryName, alt, population, region, capital, id);
  return (
    // <h1>come on</h1>
    <div className="flex flex-row flex-wrap justify-center items-center mx-4 p-8 gap-20 ">
      <Link
        to={`/countrydetails/${id}`}
        className=" w-60 bg-white dark:bg-dark-blue  m-4 rounded-md shadow-md"
      >
        <div className="w-60">
          <img src={image} alt={alt} className="w-full rounded-t-md" />
        </div>
        <div className="flex flex-col gap-2 px-6 pt-6 pb-10 dark:text-white text-very-dark-blue font-medium">
          <h3 className="text-2xl  font-semibold">{countryName}</h3>
          <p className="font-semibold">
            Population :
            <span className="text-dark-gray font-thin"> {population}</span>
          </p>
          <p className="font-semibold">
            Region:{' '}
            <span className="text-dark-gray font-thin">{continents}</span>
          </p>
          <p className="font-semibold">
            Capital: <span className="text-dark-gray font-thin">{capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;

import React from 'react';
import { Link } from 'react-router-dom';
const CountryCard = ({
  countryName,
  continents,
  image,
  alt,
  capital,
  population,
}) => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center mx-4 p-8 gap-20 h-[100vh]">
      <Link
        to="/countrydetails"
        className=" w-60 bg-white dark:bg-dark-blue  m-4 rounded-md shadow-md"
      >
        <div className="w-60">
          <img src={image} alt={alt} className="w-full rounded-t-md" />
        </div>
        <div className="flex flex-col gap-2 px-6 pt-6 pb-10 dark:text-white text-very-dark-blue font-medium">
          <h3 className="text-2xl">{countryName}</h3>
          <p>
            Population :
            <span className="text-dark-gray font-small"> {population}</span>
          </p>
          <p>
            Region:{' '}
            <span className="text-dark-gray font-small">{continents}</span>
          </p>
          <p>
            Capital:{' '}
            <span className="text-dark-gray font-small">{capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;

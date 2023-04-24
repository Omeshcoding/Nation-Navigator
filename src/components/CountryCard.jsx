import React from 'react';
import India from '../India.png';
import { Link } from 'react-router-dom';
const CountryCard = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mx-4 p-8 gap-20 h-[100%]">
      <Link
        to="/countrydetails"
        className="w-60 bg-white dark:bg-dark-blue  m-4 rounded-md shadow-md"
      >
        <div className="w-60">
          <img src={India} alt="" className="w-full rounded-t-md" />
        </div>
        <div className="flex flex-col gap-2 px-6 pt-6 pb-10 dark:text-white text-very-dark-blue font-medium">
          <h3 className="text-2xl">India</h3>
          <p>
            Population :
            <span className="text-dark-gray font-small"> 8134784</span>
          </p>
          <p>
            Region: <span className="text-dark-gray font-small">Asia</span>
          </p>
          <p>
            Capital: <span className="text-dark-gray font-small">Delhi</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;

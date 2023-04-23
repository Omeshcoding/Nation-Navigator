import React from 'react';
import India from '../India.png';
import { Link } from 'react-router-dom';
const CountryCard = () => {
  return (
    <Link
      to="/countrydetails"
      className="flex flex-wrap justify-center items-center m-4 gap-20"
    >
      <div className="w-60 bg-light-gray m-4 rounded-md shadow-md">
        <div className="w-60">
          <img src={India} alt="" className="w-full rounded-t-md" />
        </div>
        <div className="px-6 pt-6 pb-10 text-very-dark-blue font-medium">
          <h3 className="text-xl">India</h3>
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
      </div>
    </Link>
  );
};

export default CountryCard;

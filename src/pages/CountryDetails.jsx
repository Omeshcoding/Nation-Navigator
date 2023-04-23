import React from 'react';
import India from '../India.png';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const CountryDetails = () => {
  return (
    <article className="mx-4 lg:ml-14">
      <Link
        to="/"
        className="flex items-center w-28 gap-2 ml-4 my-10 bg-light-gray shadow-4xl px-6 py-2 text-very-dark-blue rounded-md"
      >
        <BsArrowLeft /> Back
      </Link>
      <div className="lg:flex bg-light-gray m-4 rounded-md shadow-sm h-[80vh] gap-24 mt-16">
        <div className="lg:w-1/2">
          <img src={India} alt="" className="w-full rounded-t-md" />
        </div>
        <div className="px-6 flex flex-col gap-3 pt-6 pb-10 text-very-dark-blue font-medium">
          <h3 className="text-4xl mb-6 font-bold">India</h3>
          <div className="flex flex-col lg:flex-row lg:gap-24 gap-10">
            <div className="flex flex-col gap-3">
              <p>
                Native Name:{' '}
                <span className="text-dark-gray font-small">Bharat</span>{' '}
              </p>
              <p>
                Population :
                <span className="text-dark-gray font-small"> 8134784</span>
              </p>
              <p>
                Region: <span className="text-dark-gray font-small">Asia</span>
              </p>
              <p>
                Sub Region:
                <span className="text-dark-gray font-small">
                  South-East Asia{' '}
                </span>
              </p>
              <p>
                Capital:{' '}
                <span className="text-dark-gray font-small">Delhi</span>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p>
                Top Level Domain:{' '}
                <span className="text-dark-gray font-small">be</span>{' '}
              </p>
              <p>
                Currencies :
                <span className="text-dark-gray font-small"> Rupee</span>
              </p>
              <p>
                Languages:{' '}
                <span className="text-dark-gray font-small">
                  Hindi, Bengali, Tamil
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-14 lg:mt-24">
            Border Coumtries:
            <span className="px-6 py-1 bg-light-gray shadow-4xl text-dark-gray">
              Nepal
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CountryDetails;

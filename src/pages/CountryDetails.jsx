import React, { useState, useEffect } from 'react';
import India from '../India.png';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => setCountry(response.data));
  }, []);
  // console.log(country.name);
  return (
    <article className="mx-4 lg:ml-14 h-[100%] lg:h-[90vh] ">
      <Link
        to="/"
        className="flex items-center w-28 gap-2 ml-4 my-10 bg-light-gray dark:bg-dark-blue dark:text-white shadow-4xl px-6 py-2 text-very-dark-blue rounded-md active:translate-y-[0.10rem]"
      >
        <BsArrowLeft /> Back
      </Link>
      {country.map((singleCountry) => {
        const id = singleCountry.cca3;
        const image = singleCountry.flags.png;
        const countryName = singleCountry.name.common;
        const alt = singleCountry.flags.alt;
        const population = singleCountry.population;
        const region = singleCountry.region;
        const capital = singleCountry.capital;

        const nativeName = singleCountry.name.nativeName.eng;

        const subRegion = singleCountry.subregion;
        const borders = singleCountry.borders;

        return (
          <div
            key={id}
            className="lg:flex text-very-dark-blue  dark:text-white mx-3 rounded-md shadow-sm  gap-24 mt-12  font-nunito-sans"
          >
            <div className="lg:w-1/2">
              <img src={image} alt={alt} className="w-full " />
            </div>
            <div className="px-6 flex flex-col gap-3 pt-6 pb-10  font-medium">
              <h3 className="text-4xl mb-6 font-bold">{countryName}</h3>
              <div className="flex flex-col lg:flex-row lg:gap-24 gap-10">
                <div className="flex flex-col gap-3">
                  <p>
                    <span className="text-dark-gray font-small">
                      {/* {nativeName} */}
                    </span>{' '}
                  </p>
                  <p>
                    Population :
                    <span className="text-dark-gray font-small">
                      {' '}
                      {population}
                    </span>
                  </p>
                  <p>
                    Region:{' '}
                    <span className="text-dark-gray font-small">{region}</span>
                  </p>
                  <p>
                    Sub Region:{' '}
                    <span className="text-dark-gray font-small">
                      {subRegion}
                    </span>
                  </p>
                  <p>
                    Capital:{' '}
                    <span className="text-dark-gray font-small">{capital}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <p>
                    Top Level Domain:{' '}
                    <span className="text-dark-gray font-small">{id}</span>{' '}
                  </p>
                  <p>
                    Currencies :
                    <span className="text-dark-gray font-small"> </span>
                  </p>
                  <p>
                    Languages:{' '}
                    <span className="text-dark-gray font-small">
                      {/* {languages} */}
                    </span>
                  </p>
                </div>
              </div>
              {borders ? (
                <div className="flex flex-wrap items-center gap-5 mt-14 lg:mt-24">
                  Border Countries:
                  {borders &&
                    borders.map((border, index) => {
                      return (
                        <span
                          key={index}
                          className="px-6 py-1 bg-light-gray dark: shadow-4xl text-dark-gray rounded-sm"
                        >
                          {border}
                        </span>
                      );
                    })}
                </div>
              ) : (
                ' '
              )}
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default CountryDetails;

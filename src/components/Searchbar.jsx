import React from 'react';

const Searchbar = () => {
  return (
    <div className=" md:flex row justify-between items-center mx-14 my-16 ">
      <div className="relative shadow-md mb-8">
        <input
          className="block w-[90vw] md:w-[30vw] h-14 appearance-none bg-white py-4  px-10 pl-12  text-dark-gray placeholder:text-slate-600 focus:outline-none text-sm leading-6"
          placeholder="Search for a country..."
          style={{ caretColor: 'gray' }}
        />
        <svg
          className="pointer-events-none absolute left-1 top-4 h-6 w-6 fill-dark-gray"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
        </svg>
      </div>
      <div className="">
        <select
          name="Filter by Region"
          placeholder="Filter"
          className="focus:outline-none shadow-lg py-4 px-3 cursor-pointer"
        >
          <option value="" className="drop-shadow-md mb-6">
            Filter by Region
          </option>
          <option
            value="filter"
            className="bg-light-gray text text-very-dark-blue focus:outline-none"
          >
            Africa{' '}
          </option>
          <option
            value="filter"
            className="bg-light-gray text text-very-dark-blue focus:outline-none"
          >
            America{' '}
          </option>
          <option
            value="filter"
            className="bg-light-gray text text-very-dark-blue focus:outline-none"
          >
            Asia{' '}
          </option>
          <option
            value="filter"
            className="bg-light-gray text text-very-dark-blue focus:outline-none"
          >
            Europe{' '}
          </option>
          <option
            value="filter"
            className="bg-light-gray text text-very-dark-blue focus:outline-none"
          >
            Oceania
          </option>
        </select>
      </div>
    </div>
  );
};

export default Searchbar;

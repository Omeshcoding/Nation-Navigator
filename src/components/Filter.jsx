import React from 'react';

const Filter = () => {
  return (
    <div>
      <select
        name="Filter by Region"
        placeholder="Filter"
        className="focus:outline-none shadow-lg py-4 px-3 cursor-pointer bg-light-gray focus:bg-zinc-100 dark:bg-dark-blue text-very-dark-blue rounded-sm dark:text-white "
      >
        <option value="" className="drop-shadow-md p-4">
          Filter by Region
        </option>
        <option value="filter" className=" focus:outline-none">
          Africa{' '}
        </option>
        <option value="filter" className=" focus:outline-none">
          America{' '}
        </option>
        <option value="filter" className=" focus:outline-none">
          Asia{' '}
        </option>
        <option value="filter" className=" focus:outline-none">
          Europe{' '}
        </option>
        <option value="filter" className=" focus:outline-none">
          Oceania
        </option>
      </select>
    </div>
  );
};

export default Filter;
